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
        <section className="pt-32 pb-20 h-full flex justify-center items-center">
          <div className="max-w-3xl w-full">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-transparent mb-12 text-center font-semibold text-sm text-flash-white transition duration-100"
            >
              <IoChevronBack className="h-4 w-4" />
              Go Back
            </Link>
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
