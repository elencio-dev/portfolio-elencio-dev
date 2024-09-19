'use client'

import { notFound } from "next/navigation"
import { getPrismicClient } from '../../../services/prismic'
import * as prismicH from '@prismicio/helpers'
import { Clock, Calendar, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface PostProps {
  params: { slug: string }
}

async function getPost(slug: string) {
  const prismic = getPrismicClient()
  const response = await prismic.getByUID('publication', slug, {})

  if (!response) {
    return null
  }

  const post = {
    slug: response.uid,
    title: prismicH.asText(response.data.title),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    content: prismicH.asHTML(response.data.content),
  }

  return post
}

function countingTimeOfReading(content: string) {
  if (!content) return 0
  const palavras = content.split(/\s+/).length
  const palavrasPorMinuto = 200
  const tempoLeituraMinutos = Math.ceil(palavras / palavrasPorMinuto)
  return tempoLeituraMinutos
}

export default function Post({ params }: PostProps) {
  const [post, setPost] = useState<any>(null)
  const [readingTime, setReadingTime] = useState(0)

  useEffect(() => {
    async function loadPost() {
      const loadedPost = await getPost(params.slug)
      if (!loadedPost) {
        notFound()
      }
      setPost(loadedPost)
      setReadingTime(countingTimeOfReading(loadedPost.content || ""))
    }
    loadPost()
  }, [params.slug])

  if (!post) {
    return <div>Loading...</div>
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8">
      <Link href="/" className="inline-flex items-center text-white hover:text-gray-400 mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para o Blog
      </Link>
      <Card className="overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground p-6">
          <CardTitle className="text-3xl font-bold leading-tight">{post.title}</CardTitle>
          <div className="flex items-center space-x-4 mt-4 text-sm">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <time>{post.updatedAt}</time>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{readingTime} min de leitura</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div
            className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/70 prose-strong:text-primary prose-code:text-primary-foreground prose-code:bg-primary"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </CardContent>
        <CardFooter className="flex justify-between items-center p-6 bg-secondary">
          <div className="text-sm text-secondary-foreground">
            Gostou do artigo? Compartilhe!
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}>
              <Facebook className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`, '_blank')}>
              <Twitter className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(post.title)}`, '_blank')}>
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}