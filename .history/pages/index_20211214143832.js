import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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

        <p className={styles.description}>
          Links:
          <a href="https://github.com/neomort">Github</a>
          <a href="https://github.com/neomort">Facebook</a>
          <a href="https://github.com/neomort">Instagram</a>
          {/* <code className={styles.code}>this is code</code> */}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Portfolio &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Tutoring &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Resume &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Blog &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://kyleadams.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
            <Image src="/images/favicons/apple-touch-icon.png" alt="Spaceman" width={100} height={100} />
          </span>
        </a>
      </footer>
    </div>
  )
}
