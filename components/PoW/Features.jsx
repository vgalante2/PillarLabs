import React from 'react'
import styles from './features.module.scss';


function Features() {
  
  
  
  
  
  
    return (
    <div className={styles.workSection}>
    
    <div className={styles.workContainer}>
    <h1 className={styles.workHeading}>Services</h1>
    <div className={styles.labs}></div>
    </div>

    <div className={styles.workContent}>
    <div className={styles.card}>
      <img  className={styles.img} src="img1.png" />
      <div className={styles.TextContainer}>
        <h2 className={styles.Heading}>Creatives</h2>
        <h3 className={styles.SubHead}>Digital Masterpieces</h3>
        <p className={styles.Text}>
        Dive into our world of creative genius where imagination knows no bounds. Our team of artists and thinkers specialize in transforming ideas into captivating visuals and compelling narratives. From stunning graphics to innovative multimedia content, we bring stories to life.
        </p>
        <button className={styles.Btn} >Learn More</button>
      </div>
    </div>
    <div className={styles.card}>
      <img className={styles.img} src="img2.png" />
      <div className={styles.TextContainer}>
        <h2 className={styles.Heading}>Development</h2>
        <h3 className={styles.SubHead}>UX/UI Design</h3>
        <p className={styles.Text}>
        In the realm of web creation, every pixel counts. Our approach combines cutting-edge design with seamless functionality, crafting websites both visually striking and user-friendly. Whether it's an e-commerce platform, a portfolio site, or a digital hub for your business, our team ensures your online presence stands out in the digital landscape, optimized for engagement and performance.
        </p>
        <button className={styles.Btn}>Learn More</button>
      </div>
    </div>
    <div className={styles.card}>
      <img className={styles.img} src="img3.png" />
      <div className={styles.TextContainer}>
        <h2 className={styles.Heading}>Advertisement</h2>
        <h3 className={styles.SubHead}>Branding/Message</h3>
        <p className={styles.Text}>
        Transforming brands into market leaders through the power of advertising. Our strategic approach to advertisements blends creativity with market insights, ensuring each campaign not only captures attention but also resonates with the target audience.
        </p>
        <button className={styles.Btn}>Learn More</button>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Features;