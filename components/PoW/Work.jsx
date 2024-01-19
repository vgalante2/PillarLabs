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
    <div className={`${styles.workCard} ${styles.Card1}`}></div>
    <div className={`${styles.workCard} ${styles.Card2}`}></div>
    <div className={`${styles.workCard} ${styles.Card3}`}></div>
    </div>
    </div>
  )
}

export default Work;