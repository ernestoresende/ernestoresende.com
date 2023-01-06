import * as React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { useWindowScroll } from '@/hooks/useWindowScroll'
import { MainLogo } from '@/assets/Logo'

export const NavHeader: React.FC = () => {
  const { y } = useWindowScroll()
  const showBackgroundColor = y > 150

  return (
    <nav
      className={clsx({
        'fixed z-50 w-full transition duration-500': true,
        'bg-chinese-black/75': showBackgroundColor,
        'bg-transparent': !showBackgroundColor
      })}
    >
      {/* Backdrop blur layer */}
      <div className="relative flex h-14 items-center justify-center px-8 backdrop-blur-xl">
        {/* Container layer for the navigation */}
        <div className="flex h-full w-full max-w-3xl justify-between border-b border-light-slate/10">
          {/* Left align portion of the NavBar */}
          <div className="flex items-center justify-center gap-16">
            <Link aria-label="Return to main page" href="/">
              <MainLogo className="h-4" />
            </Link>
            {/* Navigation links */}
            <ul className="flex gap-8 font-body text-sm font-semibold text-lavander-gray">
              <li className="transition duration-300 hover:text-flash-white">
                <a href="#about">me</a>
              </li>
              <li className="transition duration-300 hover:text-flash-white">
                <a href="#work">work</a>
              </li>
              <li className="transition duration-300 hover:text-flash-white">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
