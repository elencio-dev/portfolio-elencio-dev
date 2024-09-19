'use client'

import { useState, useEffect } from 'react'
import { Github, ExternalLink, Code } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Blog from './Blog/page'
import Profile from '@/components/Profile/page'



export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Profile />
        </div>
        <div>
          <Blog />
        </div>
      </div>
    </div>
  )
}