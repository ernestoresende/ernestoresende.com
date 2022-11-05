import { TitleAndMetaTags } from '@/components/Seo'
import { HomeHero } from '@/components/HomeHero'
import { AboutMe } from '@/components/AboutMe'

import { HomeLayout } from '@/layouts/Home'

export const Index: React.FC = () => {
  return (
    <>
      <TitleAndMetaTags title="Ernesto Resende" />
      <HomeLayout>
        <HomeHero />
        <AboutMe />
      </HomeLayout>
    </>
  )
}

export default Index
