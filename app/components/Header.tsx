import { Activity } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Activity size={24} />
            <span>Elencio</span>
          </a>
        </h1>
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li><a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}