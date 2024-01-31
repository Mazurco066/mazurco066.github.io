// Dependencies
import Image from 'next/image'
import { ReactElement } from 'react'
import { type Certificate } from '@/domain/types'

// Components

// Component props
type CertificateSectionProps = {
  certificates: Certificate[]
}

// Certificate component
export default function CertificateSection({ certificates }: CertificateSectionProps): ReactElement {

  // Component TSX
  return (
    <section id="certificate-section" className="min-h-screen relative">
      <div className="container mx-auto h-full p-4">
        <h1 className="text-4xl font-extrabold uppercase color-secondary border-solid border-b-2 mb-5">
          Certificados
        </h1>
        <p className="indent-8 text-white text-lg text-justify mb-10">
          Durante meus estudos completei alguns cursos e fiz algumas certificações, elas serão listadas 
          abaixo com seus respectivos links ao certificado de conclusão.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            certificates.map((c, i) => (
              <a
                key={"certificate-" + i}
                href={c.url ? c.url : '#'}
                rel="noopener noreferrer"
                target="_blank"
                className="item block rounded-lg p-3 flex flex-col"
                
              >
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      width={64}
                      height={64}
                      alt={c.title}
                      src={`https:${c.image}`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-md uppercase font-medium">
                      {c.title}
                    </h5>
                    <p className="text-sm font-light color-secondary">
                      {c.platform}
                    </p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grow mb-2 ">
                  <p className="text-sm">
                    {c.description}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {c.hours}hrs
                  </span>
                  <span className="text-sm text-gray-500">
                    {c.finishDate}
                  </span>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}
