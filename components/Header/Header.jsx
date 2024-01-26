import styles from "./header.module.scss";
import React from "react";
import { useLayoutEffect, useRef} from "react";
import gsap from "gsap";

function Header() {

    const comp = useRef(null)

    useLayoutEffect(() => {
      const isMobile = window.innerWidth < 768;
      
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from(".relative", {
        opacity: 0,
        delay: 0.3,
        y: isMobile ? "15" : "30" // Smaller movement on mobile
    }),
      t1.from("#Title-one", {
        opacity: 0,
        delay: 0.3,  
        y: "+=30"
      }).from("#Box1", {
        opacity: 0,
        delay: 0.3,
        y: "+=30"
      }).to(["#Title-one", "#Box1"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
      }).to("#second-slider", {
       yPercent: "-100",
        duration: 1.3,
      }).from("#Title-two", {
        opacity: 0,
        delay: 0.3,
        y: "+=30",
       }).from("#Box2", {
        opacity: 0,
        delay: 0.1,
        y: "+=30"
      }).to(["#Title-two", "#Box2"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
      }).to("#fourth-slider", {
        yPercent: "-200",
         duration: 1.3,
      }).from("#Title-four", {
        opacity: 1,
        delay: 0.3,
       
       }).from("#Box3", {
        opacity: 0,
        delay: 0.1,
        
      }).from("#info-container", {
        opacity: 1,
        delay: 0.3,
        y: "+=30",
       }).from(["#info-box1", "#info-box2"], {
        opacity: 0,
        delay: 0.3,
        y: "+=30",
      }).to("#relative", {
        clearProps: "opacity, y"
      })
    }, comp)
    
     return () => ctx.revert();
    }, [])


    return(
        <div id="relative" ref={comp} className={styles.relative}>
        <div id="intro-slider" className={styles.HeaderContainer}>
            <h1 id="Title-one" className={styles.headingOne}>Pillar</h1>
            <div  id="Box1" className={styles.box1}>LABS</div>
        </div>
        <div id="second-slider" className={styles.HeaderContainerTwo}>
            <h1 id="Title-two" className={styles.headingTwo}>Leaving Matrix...</h1>
            <div id="Box2" className={styles.box2}>NOW</div>
        </div>
        <div id="fourth-slider" className={styles.HeaderContainerFour}>
           <div>
            <h1 id="Title-three" className={styles.headingThree}>Pillar</h1>
            <div id="Box3" className={styles.box3}>LABS</div>
            </div>
            
        </div>
        </div>
    )
}

export default Header;