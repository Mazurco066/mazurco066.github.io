'use client';

// Dependencies
import { ReactElement, useEffect, useMemo, useState } from 'react'
import { type ISourceOptions } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

// Animated Bg component
export default function AnimatedBg(): ReactElement {
  // Animation state hooks
  const [ init, setInit ] = useState<boolean>(false)

  // Load particles effect
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  // Animation options
  const animationOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: {
          value: "#7CC576"
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          }
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out'
          },
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        },
      },
      detectRetina: true
    }),
    []
  )

  // Component TSX
  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0 h-full"
        options={animationOptions}
      />
    )
  }
  
  // Component not loaded return
  return <></>
}
