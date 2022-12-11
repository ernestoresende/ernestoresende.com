import Image from 'next/image'
import styles from './style.module.css'
import ProfilePicture from '@/assets/images/ProfilePicture.jpeg'

export function ProfileImage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={ProfilePicture}
          alt="Headshot of Ernesto Resende"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
