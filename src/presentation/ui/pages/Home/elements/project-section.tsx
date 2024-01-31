// Dependencies
import Image from 'next/image'
import { ReactElement } from 'react'
import { type Project } from '@/domain/types'

// Components

// Component props
type ProjectSectionProps = {
  projects: Project[]
}

// Projects component
export default function ProjectSection({ projects }: ProjectSectionProps): ReactElement {

  // Component TSX
  return (
    <section id="project-section" className="min-h-screen relative">
      <div className="container mx-auto h-full p-4">
        <h1 className="text-4xl font-extrabold uppercase color-secondary border-solid border-b-2 mb-5">
          Projetos
        </h1>
        <p className="indent-8 text-lg text-justify mb-10">
          De forma independente desenvolvi alguns projetos. Esses projetos foram criados não com a intenção de
          lucro mas sim de resolver pequenos problemas do meu dia a dia. Segue a abaixo os projetos que desenvolvi 
          e publiquei:
        </p>
        <div className="grid grid-cols-1 gap-4">
          {
            projects.map((p, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg py-3 px-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-row items-center gap-4">
                    <div>
                      <Image
                        width={48}
                        height={48}
                        src={`https:${p.thumbnail}`}
                        alt="Project logo"
                      />
                    </div>
                    <h5 className="text-lg color-secondary font-bold">
                      {p.title}
                    </h5>
                  </div>
                  <a
                    href={p.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="bg-secondary rounded-lg p-2 text-white hover:opacity-75"
                  >
                    Acessar
                  </a>
                </div>
                <hr className="my-2 color-secondary" />
                <p className="text-sm">
                  {p.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
