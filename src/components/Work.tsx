import { ProjectItem } from '@/components/ProjectItem'

import CardinalImage from '@/assets/images/projects/CardinalSnapshot.jpg'

export const Work: React.FC = () => {
  return (
    <section id="work" className="scroll-mt-24 flex justify-center items-center pb-56">
      <div className="max-w-4xl w-full font-body font-normal leading-8 text-base text-lavander-gray">
        <h2 className="font-display font-extrabold text-4xl text-flash-white pb-3">
          some things I&apos;ve built.
        </h2>
        <p className="pb-20">
          Some of the projects I&apos;ve worked on are open-sourced, and you can take
          a look at them.
        </p>
        <ProjectItem
          title="Cardinal"
          description="An open-source template for full-stack application projects built with TurboRepo, Next.js and GraphQL, configured with built-in sane defaults for database, auth and typesafety for GraphQL queries."
          image={CardinalImage}
          imageLink="https://cardinal.ernestoresende.com"
          imageAlt="Snapshot of Cardinal's demo homepage"
          externalLink='https://cardinal.ernestoresende.com'
          githubLink='https://github.com/ernestoresende/cardinal'
          // inverted
        />
      </div>
    </section>
  )
}
