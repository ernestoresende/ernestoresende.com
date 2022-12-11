import { GetStaticProps, NextPage } from 'next'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

import { TitleAndMetaTags } from '@/components/Seo'
import { HomeHero } from '@/components/HomeHero'
import { AboutMe } from '@/components/AboutMe'
import { HomeLayout } from '@/layouts/Home'

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

export const IndexPage: NextPage<PageProps> = ({ posts }) => {
  return (
    <>
      <TitleAndMetaTags
        title="Ernesto Resende"
        description="Software engineer, typing weird symbols that make the computer go beep boop!"
      />
      <HomeLayout withWavyBackground={false}>
        <HomeHero />
        <AboutMe />
      </HomeLayout>
    </>
  )
}

export default IndexPage
