import styles from "./about.module.scss";
import React from 'react';



function About() {
  
  
  
  
  
    return (
        <div className={styles.AboutContainer}>
        <div className={styles.AboutContent}>
        <img className={styles.star} src="./star.png" alt="star" />
         <div className={styles.TextContainer}>
         <div className={styles.TitleLabsContainer}> {/* New container for title and labs */}
          <h1 className={styles.AboutTitle}>CREATORS </h1>
          <div className={styles.labs}>Certified</div>
        </div>
         <p className={styles.AboutText} >"Each project we undertake is a symphony of precise technical craftsmanship and bold creative vision. Our team of seasoned professionals combines cutting-edge technological solutions with innovative design principles to transform your ideas into reality. We believe that true mastery lies in the seamless integration of the technical and the artistic, ensuring that every detail is meticulously crafted and every concept is brought to life with flair and imagination. From the initial concept to the final product, our commitment is to not only meet but exceed your expectations, delivering results that resonate both technically and artistically."</p>
         </div>
        </div>
      </div>
  )
}

export default About;