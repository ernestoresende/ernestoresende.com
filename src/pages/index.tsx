import { GetStaticProps, NextPage } from 'next'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

import { HomeLayout } from '@/layouts/Home'
import { TitleAndMetaTags } from '@/components/Seo'
import { HomeHero } from '@/components/HomeHero'
import { AboutMe } from '@/components/AboutMe'
import { Work } from '@/components/Work'
import { Contact } from '@/components/Contact'

type PageProps = {
  posts: {
    frontMatter: {
      [key: string]: any
    }
    slug: string
  }[]
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const files = fs.readdirSync(path.join('src', 'content', 'blog'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('src', 'content', 'blog', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: { posts }
  }
}

export const IndexPage: NextPage<PageProps> = () => {
  return (
    <>
      <TitleAndMetaTags
        title="Ernesto Resende"
        description="Software engineer, typing weird symbols that make the computer go beep boop!"
      />
      <HomeLayout>
        <HomeHero />
        <AboutMe />
        <Work />
        <Contact />
      </HomeLayout>
    </>
  )
}

export default IndexPage
