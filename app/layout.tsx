import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-black`}
      >
        <main className="flex-grow w-full">
          <div className="">{children}</div>
        </main>
      </body>
    </html>
  )
}
