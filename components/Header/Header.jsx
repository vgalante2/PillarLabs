import styles from "./header.module.scss";
import React, { useRef } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import { gsap } from "gsap/dist/gsap";
import {useGSAP} from '@gsap/react';

function Header() {
  gsap.registerPlugin(ScrollTrigger);
  const logo = useRef();

  useGSAP(() => {

    const text = new SplitType(logo.current, { types: 'chars' })


    gsap.set(logo.current, { opacity: 0 });
    gsap.set(text.chars, { yPercent: 115 });

     
    gsap.to(logo.current, { duration: 3, opacity: 1, ease: "power1.out"});
    gsap.to(text.chars, {
      yPercent: 0,
      ease: "sine.out",
      stagger: 0.05,
      opacity: 1,
    });

    
     
  }, {scope: logo});



  

    return(
        <div  className={styles.container}>
        <div  className={styles.HeaderContainer}>
        <h1 ref={logo} id="target" className={`${styles.pillar} ${styles.logo}`}>Pillar <span  
            className={`${styles.labs} ${styles.logo}`}>Labs</span></h1>
        
           
        </div>
        </div>
    )
}

export default Header;