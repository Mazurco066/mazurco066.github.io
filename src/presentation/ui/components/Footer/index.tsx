// Dependencies
import Image from 'next/image'
import { ReactElement } from 'react'

// Footer component
export default function Footer(): ReactElement {

  // Component TSX
  return (
    <footer id="footer-section" className="bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row p-4">
          <div className="flex flex-col gap-2">
            <h5 className="uppercase text-white font-bold text-md">
              Author
            </h5>
            <span className="text-white text-sm">
              Website created by
            </span>
            <div className="flex items-center justify-start gap-2">
              <Image 
                src="/images/me.png"
                alt="Gabriel Mazurco art"
                width={40}
                height={40}
                priority
              />
              <h5 className="text-sm text-white font-semibold	 uppercase">
                Gabriel Mazurco
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-950">
        <div className="container mx-auto p-4">
          <span className="text-white text-sm">
            © 2024, Gabriel Mazurco
          </span>
        </div>
      </div>
    </footer>
  )
}
