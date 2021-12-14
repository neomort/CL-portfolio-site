import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="If you are reading this you are really impressive" />
       
      </Head>

      <main className={styles.main}>
      

        <div className={styles.grid}>
          <a href="https://jjeongin.github.io/Chroma/" className={styles.card}>
            <h2>Paints</h2>
            <Image src="/images/portfolio/paints.png" alt="Paint" width={100} height={100}></Image>
          </a>

          <a href="https://neomort.github.io/Mental-Healh-Oasis/" className={styles.card}>
            <h2>Sounds</h2>
            <Image src="/images/portfolio/sound.png" alt="Sound" width={100} height={100}></Image>
          </a>

          <a
            href="https://neomort.github.io/comm-lab-vid-site/"
            className={styles.card}
          >
            <h2>String</h2>
            <Image src="/images/portfolio/string.png" alt="String" width={100} height={100}></Image>
          </a>

          <a
            href="https://neomort.github.io/comm-lab-comic/"
            className={styles.card}
          >
            <h2>Comic</h2>
            <Image src="/images/portfolio/comic.png" alt="Comic" width={100} height={100}></Image>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}