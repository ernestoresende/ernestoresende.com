import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useOriginLocation } from '@/hooks/useOriginLocation'

export type TitleAndMetaTagProps = {
  title?: string
  description?: string
  image?: string
  pathName?: string
}

export const TitleAndMetaTags: React.FC<TitleAndMetaTagProps> = ({
  title = 'Ernesto Resende',
  description = 'Software engineer, typing weird symbols that make the computer go beep boop!',
  image,
  pathName
}) => {
  const router = useRouter()
  const originLocation = useOriginLocation()
  const imageUrl = `${originLocation}/social/${image || 'default.png'}`
  const path = pathName || router.pathname

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={`${originLocation}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#13111C" />
    </Head>
  )
}
