import * as React from 'react'
import { clsx } from 'clsx'
import Image, { StaticImageData } from 'next/image'
import {
  IoLogoGithub as GithubLogo,
  IoOpenOutline as ExternalLink
} from 'react-icons/io5'
import styles from './style.module.css'

type ProjectItemProps = {
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  imageLink: string
  inverted?: boolean
  githubLink?: string
  externalLink?: string
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  imageAlt,
  imageLink,
  inverted = false,
  githubLink,
  externalLink
}) => {
  return (
    <div
      className={clsx(
        styles.projectGrid,
        'relative flex sm:grid sm:grid-cols-12 gap-3 items-center'
      )}
    >
      <div dir={inverted ? 'right' : 'left'} className={styles.projectContent}>
        <div className="shadow-lg shadow-slate-800/10 p-7 backdrop-blur-md bg-haiti/80 rounded-md">
          <h3 className="font-display text-flash-white font-bold text-3xl pb-4">
            {title}
          </h3>
          <p className="font-body text-base leading-7 pb-8">{description}</p>
          <div className="flex w-full items-center justify-right gap-6 ">
            {githubLink && (
              <a target="_blank" rel="noopener noreferrer" href={githubLink}>
                <GithubLogo className="hover:text-flash-white transition duration-100 h-6 w-6" />
              </a>
            )}
            {externalLink && (
              <a target="_blank" rel="noopener noreferrer" href={externalLink}>
                <ExternalLink className="hover:text-flash-white transition duration-100 h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div dir={inverted ? 'left' : 'right'} className={styles.projectImage}>
        {/* Project Image side */}
        <a href={imageLink}>
          <div className={clsx(styles.wrapper, 'hidden sm:block')}>
            <Image
              className="rounded-md"
              src={image}
              alt={imageAlt}
              width={517}
              height={353}
            />
          </div>
        </a>
      </div>
    </div>
  )
}
