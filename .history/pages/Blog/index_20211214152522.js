import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog/title>
        <meta name="description" content="If you are reading this you are really impressive" />
       
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Portfolio
        </h1>
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}