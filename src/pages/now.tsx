import { NextPage } from 'next'
import Link from 'next/link'
import { TitleAndMetaTags } from '@/components/Seo'
import { HomeLayout } from '@/layouts/Home'
import { IoChevronBack } from 'react-icons/io5'

const NowPage: NextPage = () => {
  return (
    <>
      <TitleAndMetaTags title="what I'm doing now - Ernesto Resende" />
      <HomeLayout>
        <section className="flex h-full items-center justify-center pt-32 pb-20">
          <div className="w-full max-w-3xl">
            <Link
              href="/"
              className="mb-12 inline-flex items-center justify-center rounded-md border border-transparent bg-transparent text-center text-sm font-semibold text-flash-white transition duration-100"
            >
              <IoChevronBack className="h-4 w-4" />
              Go Back
            </Link>
            <h1 className="pb-2 font-display text-4xl font-bold">
              what I&apos;m doing now.
            </h1>
            <p className="pb-8 font-body text-sm text-lavander-gray">
              updated for the last time on December 11th, 2022
            </p>
            <ul className="list-inside list-disc font-body text-base leading-7 text-lavander-gray sm:leading-6">
              <li className="pb-4">
                Slowly rebuilding this very site (emphasis on slowly)
              </li>
              <li className="pb-4">
                Studying some library level TypeScript wizardry
              </li>
              <li className="pb-4">Picking up some Rust knowledge</li>
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
