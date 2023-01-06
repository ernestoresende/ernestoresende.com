import { NavHeader } from '@/components/NavHeader'
import { NavFooter } from '@/components/NavFooter'

type HomeLayoutProps = {
  children: React.ReactNode
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <NavHeader />
      <main className="px-8">{children}</main>
      <div className="relative -z-10 h-36 w-full">
        <div className="absolute top-0 h-80 w-full bg-gradient-to-t from-eletric-pink/10" />
      </div>
      <NavFooter />
    </>
  )
}
