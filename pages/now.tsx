import { NextPage } from 'next'
import { TitleAndMetaTags } from '@/components/Seo'
import { HomeLayout } from '@/layouts/Home'

const NowPage: NextPage = () => {
  return (
    <>
      <TitleAndMetaTags
        title="what I'm doing now - Ernesto Resende"
      />
      <HomeLayout>
        <section className="px-8 h-screen-5/6 flex justify-center items-center">
          <div className="max-w-2xl w-full">
            <h1 className="font-display font-bold text-4xl pb-2">
              what I&apos;m doing now.
            </h1>
            <p className="font-body text-sm text-lavander-gray pb-8">
              updated for the last time on December 11th, 2022
            </p>
            <ul className="font-body text-base text-lavander-gray list-disc list-inside leading-7 sm:leading-6">
              <li className="pb-4">
                Slowly rebuilding this very site (emphasis on slowly)
              </li>
              <li className="pb-4">
                Studying some library level TypeScript wizardry
              </li>
              <li className="pb-4">
                Picking up some Rust knowledge
              </li>
              <li className="pb-4">
                Playing way too much No Man&apos;s Sky (space exploration is
                fun)
              </li>
            </ul>
          </div>
        </section>
      </HomeLayout>
    </>
  )
}

export default NowPage