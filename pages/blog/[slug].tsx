import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Params extends ParsedUrlQuery {
  slug: string
}

type PageProps = {
  frontMatter: {
    [key: string]: any
  }
  slug: string
  mdxSource: any
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src', 'content', 'blog'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const { slug } = context.params!

  const markdownWithMeta = fs.readFileSync(
    path.join('src', 'content', 'blog', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

const BlogPostPage: NextPage<PageProps> = ({
  frontMatter,
  slug,
  mdxSource
}) => {
  console.log({
    frontMatter,
    slug,
    mdxSource
  })

  return (
    <>
      <MDXRemote {...mdxSource} />
    </>
  )
}

export default BlogPostPage
