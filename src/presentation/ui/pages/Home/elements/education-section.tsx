// Dependencies
import Image from 'next/image'
import { ReactElement } from 'react'
import { type Education } from '@/domain/types'

// Components

// Component props
type EducationSectionProps = {
  graduations: Education[]
}

// Education component
export default function EducationSection({ graduations }: EducationSectionProps): ReactElement {

  // Component TSX
  return (
    <section id="education-section" className="min-h-screen relative">
      <div className="container mx-auto h-full p-4">
        <h1 className="text-4xl font-extrabold uppercase color-secondary border-solid border-b-2 mb-5">
          Graduação
        </h1>
        <p className="indent-8 text-lg text-justify mb-10">
          Sou graduado atualmente sobre o título de <strong>Tecnologo em tecnologia em analise e desenvolvimento de 
          sistemas</strong> e futuramente busco realizar outra graduação para obter o título de especialista. Segue 
          abaixo meu histórico academico (mais relevantes):
        </p>
        <ul className="flex flex-col gap-[64px] lg:gap-2 mt-[72px] lg:mt-0">
          {
            graduations.map((c, i) => (
              <li
                key={"carrer-" + i}
                className="flex flex-col lg:flex-row items-center lg:items-center lg:gap-2 relative"
              >
                
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
                <div className="overflow-hidden border-solid border-2 border-black rounded-lg absolute top-[-48px] lg:relative lg:top-0">
                  <Image
                    width={96}
                    height={96}
                    src={`https:${c.logo}`}
                    alt="Company logo"
                    priority
                  />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
