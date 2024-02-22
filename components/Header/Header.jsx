import styles from "./header.module.scss";
import React, { useEffect} from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import { gsap } from "gsap/dist/gsap";


function Header() {


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const text = new SplitType('#target', { types: 'chars' })

     gsap.set("#target", { opacity: 0 });
     gsap.set(text.chars, { yPercent: 150 });

     const initalAnimation = gsap.to(text.chars, {
      yPercent: 0,
      ease: "sine.out",
      stagger: {from: "center", amount: 0.5, ease: "power1.out" }
     });
     gsap.to("#target", { duration: 3, opacity: 1 });
     

     
  })



  

    return(
        <div  className={styles.container}>
        <div  className={styles.HeaderContainer}>
        <h1 id="target" className={`${styles.pillar} ${styles.logo}`}>Pillar <span  
            className={`${styles.labs} ${styles.logo}`}>Labs</span></h1>
        
           
        </div>
        </div>
    )
}

export default Header;