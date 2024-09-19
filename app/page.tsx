'use client'

import Blog from './blog/page'
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