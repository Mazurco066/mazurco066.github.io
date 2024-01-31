'use client'

// Dependencies
import Image from 'next/image'
import { ReactElement, useCallback } from 'react'

// Footer component
export default function Header(): ReactElement {

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Component TSX
  return (
    <header id="header" className="fixed top-0 right-0 left-0 py-2 z-10 bg-primary">
      <div className="container mx-auto h-full">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4">
            <Image
              width={32}
              height={32}
              src="/images/me.png"
              alt="Gabriel Mazurco art"
              className="ml-4 lg:ml-0"
            />
            <span className="text-md uppercase text-white font-medium">
              Gabriel Mazurco
            </span>
          </div>
          <div className="flex-row items-center justify-end gap-4 hidden lg:flex">
            <a
              className="text-md uppercase text-white font-medium cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => scrollTo("hero-section")}
            >
              Home
            </a>
            <a
              className="text-md uppercase text-white font-medium cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => scrollTo("carrer-section")}
            >
              Carreira
            </a>
            <span
              className="text-md uppercase text-white font-medium cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => scrollTo("skill-section")}
            >
              Habilidades
            </span>
            <a
              className="text-md uppercase text-white font-medium cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => scrollTo("education-section")}
            >
              Graduação
            </a>
            <a
              className="text-md uppercase text-white font-medium cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => scrollTo("certificate-section")}
            >
              Certificados
            </a>
            <a
              className="text-md uppercase text-white font-medium cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => scrollTo("project-section")}
            >
              Projetos
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
