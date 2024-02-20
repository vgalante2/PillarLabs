import styles from "./header.module.scss";
import React, { useEffect} from "react";
import { useRef} from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

function Header() {



  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const text = new SplitType('#target', { types: 'chars' })

     gsap.set("#target", { autoAlpha: 1 });
     gsap.set(text.chars, { yPercent: 150 });

     const initalAnimation = gsap.to(text.chars, {
      yPercent: 1,
      ease: "sine.out",
      stagger: {from: "center", amount: 0.5, ease: "power1.out" }
     });
  })





    return(
        <div  className={styles.container}>
        <div  className={styles.HeaderContainer}>
        <h1 id="target" className={`${styles.pillar} ${styles.logo}`}>Pillar <span id="target" className={`${styles.labs} ${styles.logo}`}>Labs</span></h1>
        <div className={styles.wrapper}></div>
           
        </div>
        </div>
    )
}

export default Header;