import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'
import { animate, motion, useScroll } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useScroll();
  return <><motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} ></motion.div><NextNProgress color="#eab308" /><Component {...pageProps} /></>
}
