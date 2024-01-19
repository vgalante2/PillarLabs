import React from 'react'
import styles from './work.module.scss';


function Work() {
  
  
  
  
  
  
    return (
    <div className={styles.workSection}>
    
    <div className={styles.workContainer}>
    <h1 className={styles.workHeading}>
   Hello
    </h1>
    </div>
    <div className={styles.workContent}>
    <div className={`${styles.workCard} ${styles.Card1}`}><h1 className={styles.FirstH1}>Card 1</h1></div>
    <div className={`${styles.workCard} ${styles.Card2}`}><h1 className={styles.SecondH1}>Card 2</h1></div>
    <div className={`${styles.workCard} ${styles.Card3}`}><h1 className={styles.ThirdH1}>Card 3</h1></div>
    </div>
    </div>
  )
}

export default Work;