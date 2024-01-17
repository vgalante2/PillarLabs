import styles from "../header.module.scss";
import React from "react";
import { useLayoutEffect, useRef} from "react";
import gsap from "gsap";

function Header() {

    const comp = useRef(null)

    useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
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
       
       }).from("#Box4", {
        opacity: 0,
        delay: 0.1,
        
      }).from("#info-container", {
        opacity: 1,
        delay: 0.3,
        y: "+=30",
       }).from(["#info-box1", "#info-box2"], {
        opacity: 0,
        delay: 0.3,
        y: "+=30"
      })
    }, comp)
    
     return () => ctx.revert()
    }, [])


    return(
        <div  ref={comp} className={styles.relative}>
        <div id="intro-slider" className={styles.HeaderContainer}>
            <h1 id="Title-one" className={styles.heading}>Pillar</h1>
            <div  id="Box1" className={styles.box1}>LABS</div>
        </div>
        <div id="second-slider" className={styles.HeaderContainerTwo}>
            <h1 id="Title-two" className={styles.headingTwo}>Leaving Matrix...</h1>
            <div id="Box2" className={styles.box2}>NOW</div>
        </div>
        <div id="fourth-slider" className={styles.HeaderContainerFour}>
           <div>
            <h1 id="Title-four" className={styles.headingFour}>Pillar</h1>
            <div id="Box4" className={styles.box4}>LABS</div>
            </div>
            <div id="info-container" className={styles.InfoContainer}>
            <div id="info-box1" className={styles.infoBox1}>
            <h1> Development </h1>
            <p>Specializing in the creation of bespoke digital products, we are dedicated to bringing your brand to life. Our expertise lies in designing stunning websites, unique logos, and captivating creatives that not only resonate with your audience but also elevate your online presence.</p>
            </div>
            <div id="info-box2" className={styles.infoBox2}>
            <h1> Creatives </h1>
            <p>From breathtaking drone shots that capture a unique perspective, to engaging social media videos that tell your story, and stunning digital art that breaks the conventional boundaries - we bring your ideas to life. Our team combines technical expertise with artistic flair, ensuring every project we undertake is not just visually appealing, but also strategically crafted to resonate with your audience. </p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Header;