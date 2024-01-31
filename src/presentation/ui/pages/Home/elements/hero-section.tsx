'use client'

// Dependencies
import Image from 'next/image'
import { ReactElement } from 'react'

// Components
import { FaFacebookF, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import AnimatedBg from './animated-bg'

// Hero component
export default function HeroSection(): ReactElement {

  // Component TSX
  return (
    <section id="hero-section" className="h-screen relative">
      <AnimatedBg />
      <div className="absolute inset-0 z-1">
        <div className="container mx-auto h-full">
          <div className="h-full w-full flex flex-col gap-6 justify-center items-center">
            <div className="relative">
              <div className="avatar-frame" />
              <Image 
                className="rounded-full border-[3px] p-4 color-secondary"
                src="/images/me.png"
                alt="Gabriel Mazurco art"
                width={300}
                height={300}
                priority
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <h3 className="color-secondary uppercase text-2xl font-extrabold">
                Gabriel Mazurco
              </h3>
              <h4 className="text-white uppercase text-lg font-extrabold">
                Desenvolvedor Web/Mobile
              </h4>
            </div>
            <div className="flex flex-row items-center justify-center gap-10 z-2">
              <a
                className="hero-button rounded-full w-14 h-14 text-2xl"
                href="https://www.facebook.com/gabriel.ribeiro.7921/"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                className="hero-button rounded-full w-14 h-14 text-2xl"
                href="https://www.linkedin.com/in/mazurco066/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="hero-button rounded-full w-14 h-14 text-2xl"
                href="https://github.com/mazurco066"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithubAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
