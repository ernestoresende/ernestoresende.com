import { clsx } from 'clsx'
import { MainLogo } from '@/assets/Logo'

type NavFooterProps = {
  withWavyBackground?: boolean
}

export const NavFooter: React.FC<NavFooterProps> = ({ withWavyBackground }) => {
  return (
    <footer className="z-10" role="contentinfo">
      {/* SVG Mask wrapper */}
      {withWavyBackground && (
        <div className="relative top-9 overflow-hidden w-full">
          <svg
            preserveAspectRatio="none"
            width={1440}
            height={46}
            className="w-full"
            viewBox="0 0 1440 46"
            fill="none"
            xmlns="http://www.w3.org/2000/Path"
          >
            <path
              className="fill-chinese-black"
              d="M348.592 45.9459C191.1 45.9459 -1 20.9753 -1 20.9753V0H1440V12.9847C1440 12.9847 1235.51 44.5192 1103.45 45.9459C955.009 47.5496 900.816 12.9847 724.766 12.9847C548.717 12.9847 506.084 45.9459 348.592 45.9459Z"
            />
          </svg>
        </div>
      )}

      <div
        className={clsx({
          'bg-light-slate/5': withWavyBackground,
          'py-16 px-8 flex justify-center items-center': true
        })}
      >
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          <MainLogo className="h-6 pb-2" />
          <p className="text-lavander-gray text-sm">
            Built by Ernesto Resende - © 2022
          </p>
        </div>
      </div>
    </footer>
  )
}
