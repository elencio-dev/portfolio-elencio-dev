import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { getPrismicClient } from '@/services/prismic'
import * as prismicH from '@prismicio/helpers'

export type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
  tag: string[]
  categories: string
  image: string
}

export default async function Blog() {
  const prismic = getPrismicClient()

  const response = await prismic.getByType('publication', {
    fetch: [
      'publication.title',
      'publication.content',
      'publication.tags',
      'publication.categories',
    ],
    pageSize: 100,
  })

  const posts = response.results
    .map((post) => {
      const contentArray = post.data.content

      if (Array.isArray(contentArray)) {
        const paragraphs = contentArray
          .filter((content) => content.type === 'paragraph')
          .map((paragraph) => paragraph.text)
          .join(' ')

        return {
          slug: post.uid,
          tag: post.tags,
          image: post.href,
          title: prismicH.asText(post.data.title),
          excerpt: paragraphs.slice(0, 100) + '....',
          updatedAt: post.last_publication_date
            ? new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })
            : '',
        }
      }
      return null // Retorna null se contentArray não for um array
    })
    .filter(Boolean) as Post[]

  return (
    <div className="max-w-4xl">
      <Card className="bg-gray-800 text-white border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4">
            Explicando conceitos
          </CardTitle>
          <CardDescription className="text-gray-400">
            Últimos Artigos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                className="block hover:bg-gray-700 p-4 rounded-lg transition"
                href={`/posts/${post.slug}`}
                key={post.slug}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-400 mt-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{post.updatedAt}</span>
                  <Badge className="ml-4 bg-blue-600 text-white">
                    Read More
                  </Badge>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
