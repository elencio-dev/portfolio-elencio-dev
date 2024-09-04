import Image from "next/image"
import { GithubIcon, LinkedinIcon, MailIcon, BarChart2, Code, Briefcase } from "lucide-react"
import ProjectsCard from "./components/ProjectsCard"
import SkillsCard from "./components/SkillsCard"
import ProfileCard from "./components/ProfileCard"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <ProfileCard />
          {/* Skills Card */}
          <SkillsCard />
          {/* Projects Card */}
           <ProjectsCard />
        </div>
      </div>
    </main>
  )
}