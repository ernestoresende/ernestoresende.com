import * as React from 'react'
import { BackgroundRipple } from '@/assets/BackgroundRipple'
import { Document, Github, LinkedIn } from '@/assets/icons'

export const HomeHero: React.FC = () => {
  return (
    <section className="h-screen sm:py-0 pb-14 py-14 flex justify-center items-center">
      <div className="max-w-3xl w-full">
        <div className="flex">
          <div className="z-10">
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl pb-6">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eletric-pink to-deep-lilac">
                Ernesto
              </span>
            </h1>

            <p className="font-body text-base sm:text-xl text-lavander-gray font-normal leading-8 sm:leading-9 pb-7">
              Software engineer specialized in building (and occasionally
              designing) digital experiences. Highly focused on the JavaScript
              ecosystem and serverless environments.
            </p>

            <div className="flex gap-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CV"
                href="/resume.pdf"
              >
                <Document className="text-lavander-gray h-7 w-7 hover:text-flash-white transition duration-300" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                href="https://github.com/ernestoresende"
              >
                <Github className="text-lavander-gray h-7 w-7 hover:text-flash-white transition duration-300" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/ernesto-resende"
              >
                <LinkedIn className="text-lavander-gray h-7 w-7 hover:text-flash-white transition duration-300" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-7/12 max-w-2xl z-0">
            <BackgroundRipple />
          </div>
        </div>
      </div>
    </section>
  )
}
