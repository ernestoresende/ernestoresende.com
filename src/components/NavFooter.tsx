import { MainLogo } from '@/assets/Logo'

export const NavFooter: React.FC = () => {
  return (
    <footer className="z-10" role="contentinfo">
      <div className="flex items-center justify-center py-16 px-8">
        <div className="flex w-full max-w-2xl flex-col items-center justify-center">
          <MainLogo className="h-6 pb-2" />
          <p className="text-sm text-lavander-gray">
            Built by Ernesto Resende - © 2023
          </p>
        </div>
      </div>
    </footer>
  )
}
