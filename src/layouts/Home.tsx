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
        className="absolute top-0 -z-10"
        src={BackgroundGradient}
        fill={true}
        quality={50}
        alt=""
      />
      <main className="px-8">{children}</main>
      <div className="-z-10 relative h-36 w-full">
        <div className="absolute top-0 h-80 w-full bg-gradient-to-t from-eletric-pink/10" />
      </div>
      <NavFooter withWavyBackground={withWavyBackground} />
    </>
  )
}
