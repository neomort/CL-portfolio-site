import { React, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer({})  {


  return (
    <>
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
          <a href="https://www.facebook.com/profile.php?id=100028246666445">Facebook</a>
          <a href="https://www.instagram.com/kyle_david_adams/">Instagram</a>
          {/* <code className={styles.code}>this is code</code> */}
          </p>
          </span>
        </a>
        <h1 className={styles.title}>
        <a href={`/`}>
          Kyle Adams
        </a>
        </h1>
        
        </div>
        </>
    )
}