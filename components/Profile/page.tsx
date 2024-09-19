import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface UserData {
  name: string;
  avatar_url: string;
  bio: string;
  introduction?: string;
  projects: Array<{ title: string; description: string; url: string }>;
}

export default function Profile() {
  const userData: UserData = {
    name: 'Elêncio Calado',
    avatar_url: 'https://avatars.githubusercontent.com/u/161397506?s=400&u=e268fb998fa86130747266eb3e6b609e095c0a02&v=4',
    bio: 'Frontend Developer && Content Writer',
    projects: [
      {
        title: 'Unilab Student Chapter',
        description:
          'Site da unilab student chapter, capitulo que representa o OSA(Optica) na unilab.',
        url: 'https://unilabstudentchapter.org/',
      },
      {
        title: 'Acervo Acadêmico',
        description:
          'Servindo para partilhar conteúdos passados, para ajudar no preparo acadêmico.',
        url: 'https://portal-estudante.vercel.app/',
      },
      {
        title: 'SigeSai Startup',
        description: 'Preparando.....',
        url: '#',
      },
    ],
  };

  return (
    <Card className="w-full bg-gray-800 border-0">
      <CardContent className="p-6">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6">
          <Avatar className="h-24 w-24">
            <Image
              src={userData.avatar_url || '/placeholder.svg'}
              alt={userData.name || 'User avatar'}
              width={96}
              height={96}
              className="rounded-full"
            />
            <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="mt-4 sm:mt-0 text-center sm:text-left">
            <CardTitle className="text-2xl font-bold text-white">{userData.name}</CardTitle>
            <CardDescription className="text-lg text-gray-400">{userData.bio}</CardDescription>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Projetos</h3>
          <ul className="space-y-6">
            {userData.projects.map((project, index) => (
              <li
                key={index}
                className="border-b border-gray-700 pb-4 last:border-b-0"
              >
                <h4 className="text-xl font-medium text-white">{project.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{project.description}</p>
                <Link
                  href={project.url}
                  target="_blank"
                  className="text-blue-500 hover:underline text-sm"
                >
                  ver projeto
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
