import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import Positions from '../components/Positions'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Shakil Khan</title>
        <meta name="description" content="Shakil Khan full stack developer" />
        <link rel="icon" href="/images/javascript.png" />
      </Head>
      <div className='max-w-screen-lg mx-auto py-20 px-5'>
        <Header />
        <Contacts />
        <About />
        <Skills />
        <Positions />
        <Projects />
      </div>
    </div>
  )
}
