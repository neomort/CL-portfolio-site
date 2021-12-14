import Head from 'next/head'
import Image from 'next/image'
// import styles from '../pages/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle's Portfolio</title>
        <meta name="description" content="If you are reading this you are really impressive" />
       
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Portfolio
        </h1>
      </main>

      <footer className={styles.footer}>
        <div className={styles.div-2}>
        <a
          href="https://kyleadams.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
            <Image src="/images/favicons/apple-touch-icon.png" alt="Spaceman" width={100} height={100} />
          </span>
          <span>
            <p className={styles.description}>
         
          <a href="https://github.com/neomort">Github</a>
          <a href="https://github.com/neomort">Facebook</a>
          <a href="https://github.com/neomort">Instagram</a>
          {/* <code className={styles.code}>this is code</code> */}
          </p>
          </span>
        </a>
        <h1 className={styles.title}>
        <a href="https://kyleadams.com/">
          Kyle Adams
        </a>
        </h1>
        
        </div>
      </footer>
    </div>
  )
}