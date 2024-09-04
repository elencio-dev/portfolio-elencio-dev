import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";

export default function ProfileCard(){
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h1 className="text-2xl font-bold">Your Name</h1>
              <p className="text-gray-600">Web Developer</p>
            </div>
            <p className="text-gray-700 text-center mb-6">
              I'm a passionate web developer with expertise in React, Next.js, and modern frontend technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <GithubIcon className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <MailIcon className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

    )
}