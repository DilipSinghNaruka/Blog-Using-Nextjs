import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thunders Blog</title>
      </Head>

      <div className={styles.logo} >
        Thunders Blog
      </div>
      <div className={styles.navbar}>
        <ul>


          <Link href="/"> <li>Home</li></Link>

          
            <Link href="/blog"> <li>Blog</li></Link>
          
          
            <Link href="/contact"><li>Contact Us </li></Link>
         
          
            <Link href="/about"><li>About Us</li></Link>
          
        </ul>
      </div>
    </div>

  )
}

export default Navbar