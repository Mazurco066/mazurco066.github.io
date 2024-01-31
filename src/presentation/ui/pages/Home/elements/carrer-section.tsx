// Dependencies
import Image from 'next/image'
import { ReactElement } from 'react'
import { type Carrer } from '@/domain/types'

// Components

// Component props
type CarrerSectionProps = {
  carrer: Carrer[]
}

// Carrer component
export default function CarrerSection({ carrer }: CarrerSectionProps): ReactElement {

  // Component TSX
  return (
    <section id="carrer-section" className="min-h-screen relative">
      <div className="container mx-auto h-full p-4">
        <h1 className="text-4xl font-extrabold uppercase color-secondary border-solid border-b-2 mb-5">
          Carreira
        </h1>
        <p className="indent-8 text-lg text-justify">
          Sou um profissional que trabalha na área de <strong>desenvolvimento de software</strong> , e tenho como
          stack principal linguagens e frameworks que solucionam problemas nas plataformas Web E Mobile,
          tais como: <strong>Nodejs, Reactjs, Vuejs, React Native, Nextjs, Nestjs, Typescript, Golang e Python</strong>.
        </p>
        <p className="indent-8 text-lg mb-10 text-justify">
          Como desenvolvedor trabalhei a maior parte do meu tempo no setor privado em diversos setores e projetos, segue abaixo algumas empresas nas quais prestei serviço:
        </p>
        <ul className="flex flex-col gap-[64px] lg:gap-2 mt-[72px] lg:mt-0">
          {
            carrer.map((c, i) => (
              <li
                key={"carrer-" + i}
                className="flex flex-col lg:flex-row items-center lg:items-center lg:gap-2 relative"
              >
                <div className="overflow-hidden border-solid border-2 border-black rounded-lg absolute top-[-48px] lg:relative lg:top-0">
                  <Image
                    width={96}
                    height={96}
                    src={`https:${c.logo}`}
                    alt="Company logo"
                    priority
                  />
                </div>
                <div className="grow p-3 pt-16 lg:p-3 bg-gray-200 rounded-lg w-full">
                  <h4 className="text-md font-bold text-center lg:text-left">
                    {c.title}
                  </h4>
                  <h5 className="text-md font-medium color-secondary text-center lg:text-left">
                    {c.company}
                  </h5>
                  <p className="text-sm font-light text-center lg:text-left">
                    {c.date}
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
