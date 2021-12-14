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
          <a href={`/Portfolio`} className={styles.card}>
            <h2>Paints</h2>
            <p></p>
          </a>

          <a href={`/Tutoring`} className={styles.card}>
            <h2>Sounds</h2>
            <p></p>
          </a>

          <a
            href={`/Resume`}
            className={styles.card}
          >
            <h2>String</h2>
            <p></p>
          </a>

          <a
            href={`/Blog`}
            className={styles.card}
          >
            <h2>Comic</h2>
            <p>
              
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}