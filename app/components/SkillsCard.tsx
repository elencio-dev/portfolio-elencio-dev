import { Code } from "lucide-react";

export default function SkillsCard() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Code className="mr-2" /> Skills
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">React</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "90%"}}></div>
            </div>
          </li>
          <li className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Next.js</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
            </div>
          </li>
          <li className="flex items-center">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">TypeScript</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
            </div>
          </li>
        </ul>
      </div>
    )
}