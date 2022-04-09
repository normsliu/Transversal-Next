import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TransversaL</title>
        <meta name="description" content="TransversaL" />
      </Head>

      <Navbar />

      <Hero />
      

      <Footer />
    </div>
  )
}
