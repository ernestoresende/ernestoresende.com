import Image from 'next/image'
import { NavHeader } from '@/components/NavHeader'
import { NavFooter } from '@/components/NavFooter'
import BackgroundGradient from '@/assets/images/BackgroundGradient.png'

type HomeLayoutProps = {
  children: React.ReactNode
  withWavyBackground?: boolean
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({
  children,
  withWavyBackground
}) => {
  return (
    <>
      <NavHeader />
      <Image
        className="-z-10 absolute top-0"
        src={BackgroundGradient}
        fill={true}
        quality={50}
        alt=""
      />
      <main className="px-8">{children}</main>
      <NavFooter withWavyBackground={withWavyBackground} />
    </>
  )
}
