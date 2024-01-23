import React from 'react'
import styles from './work.module.scss';


function Work() {
  
  
  
  
  
  
    return (
    <div className={styles.workSection}>
    
    <div className={styles.workContainer}>
    <h1 className={styles.workHeading}>
    </h1>
    </div>

    <div className={styles.workContent}>
    <div class={styles.flipCard}>
    <div class={styles.flipCardInner}>
        <div class={styles.flipCardFront}>
            <p class={styles.cardtitle}>Advertisement</p>
            <p>Captivating Audiences, Elevating Brands</p>
        </div>
        <div class={styles.flipCardBack}>
            <p class={styles.titleBack}>
            Transforming brands into market leaders through the power of advertising, we create campaigns that speak volumes. Our strategic approach to advertisements blends creativity with market insights, ensuring each campaign not only captures attention but also resonates with the target audience. From traditional print media to dynamic digital ads, we craft messages that engage, persuade, and drive action</p>
           
        </div>
    </div>
</div>
 <div class={styles.flipCard}>
    <div class={styles.flipCardInner}>
        <div class={styles.flipCardFront}>
            <p class={styles.cardtitle}>Web Creation</p>
            <p>Building Digital Masterpieces, One Pixel at a Time</p>
        </div>
        <div class={styles.flipCardBack}>
            <p class={styles.titleBack}>
            In the realm of web creation, every pixel counts. Our approach combines cutting-edge design with seamless functionality, crafting bespoke websites that are both visually striking and user-friendly. Whether it's an e-commerce platform, a portfolio site, or a digital hub for your business, our team ensures your online presence stands out in the digital landscape, optimized for engagement and performance.</p>
            
        </div>
    </div>
</div>
 <div class={styles.flipCard}>
    <div class={styles.flipCardInner}>
        <div class={styles.flipCardFront}>
            <p class={styles.cardtitle}>Creatives</p>
            <p>Unleashing Imagination, Crafting Brilliance</p>
        </div>
        <div class={styles.flipCardBack}>
            <p class={styles.titleBack}>
            Dive into our world of creative genius where imagination knows no bounds. Our team of artists and thinkers specialize in transforming ideas into captivating visuals and compelling narratives. From stunning graphics to innovative multimedia content, we bring stories to life, ensuring each creation resonates with its audience and leaves a lasting impression</p>
           
        </div>
    </div>
</div>
    </div>

    </div>
  )
}

export default Work;