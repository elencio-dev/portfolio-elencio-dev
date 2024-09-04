import { Briefcase } from "lucide-react";


export default function ProjectsCard(){
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Briefcase className="mr-2" /> Projects
        </h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-medium">E-commerce Website</h3>
              <p className="text-sm text-gray-600">A fully functional online store built with Next.js and Stripe.</p>
            </a>
          </li>
          <li>
            <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-medium">Task Management App</h3>
              <p className="text-sm text-gray-600">A React-based app for organizing and tracking tasks.</p>
            </a>
          </li>
          <li>
            <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-medium">Portfolio Website</h3>
              <p className="text-sm text-gray-600">A sleek and responsive portfolio showcasing my work.</p>
            </a>
          </li>
        </ul>
      </div>   
    )
}