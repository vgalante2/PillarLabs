
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from "../components/Header/Header";
import About from "../components/About/About";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Header />
      <About />
    </>
  )
}
