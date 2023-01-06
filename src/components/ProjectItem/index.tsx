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
  githubLinkAlt?: string
  externalLink?: string
  externalLinkAlt?: string
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  imageAlt,
  imageLink,
  inverted = false,
  githubLink,
  githubLinkAlt = 'GitHub link',
  externalLink,
  externalLinkAlt = 'Project link'
}) => {
  return (
    <div
      className={clsx(
        styles.projectGrid,
        'relative flex items-center gap-3 sm:grid sm:grid-cols-12'
      )}
    >
      <div dir={inverted ? 'right' : 'left'} className={styles.projectContent}>
        <div className="select-none rounded-md border border-dark-purple bg-chinese-black/80 py-7 px-9 shadow-2xl shadow-pink-800/20 backdrop-blur-md transition-all duration-200 hover:shadow-pink-700/30">
          <h3 className="pb-4 font-display text-3xl font-bold text-flash-white">
            {title}
          </h3>
          <p className="pb-8 font-body text-base leading-7">{description}</p>
          <div className="justify-right flex w-full items-center gap-6 ">
            {githubLink && (
              <a
                aria-label={githubLinkAlt}
                target="_blank"
                rel="noopener noreferrer"
                href={githubLink}
              >
                <GithubLogo className="h-6 w-6 transition duration-100 hover:text-flash-white" />
              </a>
            )}
            {externalLink && (
              <a
                aria-label={externalLinkAlt}
                target="_blank"
                rel="noopener noreferrer"
                href={externalLink}
              >
                <ExternalLink className="h-6 w-6 transition duration-100 hover:text-flash-white" />
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
