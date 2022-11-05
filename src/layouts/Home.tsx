import { NavHeader } from '@/components/NavHeader'

type HomeLayoutProps = {
  children: React.ReactNode
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <NavHeader />
      <img className="background-gradient -z-10 absolute top-0" src="assets/BackgroundGradient.svg" alt="" />
      <div className="pt-14">{children}</div>
    </>
  )
}
