import * as React from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'
import { BackgroundRipple } from '@/assets/BackgroundRipple'
import BackgroundGradient from '@/assets/images/BackgroundGradient.png'
import {
  IoDocument as Document,
  IoLogoGithub as Github,
  IoLogoLinkedin as LinkedIn
} from 'react-icons/io5'

export const HomeHero: React.FC = () => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <section className="flex h-screen items-center justify-center py-14 pb-14 sm:py-0">
      <Image
        className={clsx({
          'absolute -z-10 transition-all duration-700': true,
          'opacity-0': !loaded,
          'opacity-100': loaded
        })}
        style={{
          filter: 'brightness(0.8)',
          top: 0,
        }}
        onLoadingComplete={() => setLoaded(true)}
        src={BackgroundGradient}
        fill={true}
        quality={70}
        alt=""
      />
      <div className="w-full max-w-3xl">
        <div className="flex">
          <div className="z-10">
            <h1 className="pb-6 font-display text-5xl font-extrabold sm:text-7xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-eletric-pink to-deep-lilac bg-clip-text text-transparent">
                Ernesto
              </span>
            </h1>

            <p className="pb-7 font-body text-base font-normal leading-8 text-lavander-gray sm:text-xl sm:leading-9">
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
                <Document className="h-7 w-7 text-lavander-gray transition duration-300 hover:text-flash-white" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                href="https://github.com/ernestoresende"
              >
                <Github className="h-7 w-7 text-lavander-gray transition duration-300 hover:text-flash-white" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/ernesto-resende"
              >
                <LinkedIn className="h-7 w-7 text-lavander-gray transition duration-300 hover:text-flash-white" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 z-0 w-7/12 max-w-2xl">
            <BackgroundRipple />
          </div>
        </div>
      </div>
    </section>
  )
}
