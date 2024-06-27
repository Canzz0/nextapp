import React from 'react'
import styles from '../styles/home.module.css'
import Link from 'next/link'
import { Roboto } from 'next/font/google'


//google fontlarını kullanmamıza olanak sağlıyor
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const Page = () => {
    var id =3
  return (
    <div className={styles.main}>
      
        <h2>Anasayfa</h2>
        <div className={styles.main}>
        <Link className={`${roboto.className} ${styles.link}`} href={'about'}>Tanıtım Sayfası</Link>
        <Link  className={styles.link} href={`about/${id}`}>id:3 Tanıtım Sayfası</Link>
        </div>
    </div>

  )
}

export default Page