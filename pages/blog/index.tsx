import { GetStaticProps, NextPage } from 'next'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

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

const BlogIndexPage: NextPage<PageProps> = ({ posts }) => {
  return <div>Nothing for now</div>
}

export default BlogIndexPage
