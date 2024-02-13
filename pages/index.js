
import styles from '@/styles/Home.module.scss'
import Header from "../components/Header/Header";
import About from "../components/About/About";
import HorizontalScroll from "../components/Slides/HorizontalScroll";
import Work from "../components/PoW/Work";



export default function Home() {


  return (
    <>
      <Header />
      <About />
      <Work  />
      <HorizontalScroll />
    </>
  )
}
