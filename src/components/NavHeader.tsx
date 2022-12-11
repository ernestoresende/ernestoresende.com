import * as React from 'react'
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
      <div className="relative flex items-center justify-center px-8 h-14 backdrop-blur-xl">
        {/* Container layer for the navigation */}
        <div className="max-w-3xl w-full h-full border-light-slate/10 border-b flex justify-between">
          {/* Left align portion of the NavBar */}
          <div className="flex items-center justify-center gap-16">
            <MainLogo className="h-4" />
            {/* Navigation links */}
            <ul className="flex gap-8 text-lavander-gray text-sm font-body font-semibold">
              <li className="hover:text-flash-white transition duration-300">
                <a href="#">blog</a>
              </li>
              <li className="hover:text-flash-white transition duration-300">
                <a href="#">work</a>
              </li>
              <li className="hover:text-flash-white transition duration-300">
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
