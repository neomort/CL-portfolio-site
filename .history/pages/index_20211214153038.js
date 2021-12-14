import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle's Portfolio</title>
        <meta name="description" content="If you are reading this you are really impressive" />
       
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://kyleadams.com/">Kyle's Portfolio Website</a>
        </h1>

        <p className={styles.description}>
        Interactive Media Student, Film Maker, Tutor
        </p>

        

        <div className={styles.grid}>
          <a href={`/Portfolio`} className={styles.card}>
            <h2>Portfolio</h2>
            <p></p>
          </a>

          <a href={`/Tutoring`} className={styles.card}>
            <h2>Tutoring</h2>
            <p></p>
          </a>

          <a
            href={`/Resume`}
            className={styles.card}
          >
            <h2>Resume</h2>
            <p></p>
          </a>

          <a
            href={`/Blog`}
            className={styles.card}
          >
            <h2>Blog</h2>
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
