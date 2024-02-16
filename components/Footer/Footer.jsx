import React from 'react';
import styles from './footer.module.scss';


function Footer() {



    return (
<section className={styles.Footer}>
    <div className={styles.FooterContent}>
    <h1  className={styles.FooterPillar}> Pillar<span className={styles.FooterLabs}>Labs</span></h1>
    <svg className={styles.pillar} width="400px" height="400px" viewBox="-6.55 0 46 46" xmlns="http://www.w3.org/2000/svg" fill="#white" stroke="white">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g transform="translate(-732.362 -205.86)"> <path d="M760.563,214.077c.824-1.493-.337-3.537-2.606-3.537a3.232,3.232,0,0,0-3.252,3.049c-.407,2.236,1.626,3.911,4.015,3.911,3.3,0,6.038-2.278,6.038-5.57a5.575,5.575,0,0,0-5.886-5.57H738.747a5.574,5.574,0,0,0-5.885,5.57,5.882,5.882,0,0,0,6.038,5.8c2.389,0,4.422-1.788,4.015-4.023a3.269,3.269,0,0,0-3.252-3.106c-2.269,0-3.43,2.016-2.606,3.509" fill="none" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.886"/> <line x2="11" transform="translate(743.477 213.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <path d="M758.477,218.36v23h-20v-23" fill="none" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.886"/> <line y2="18" transform="translate(748.477 219.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <line y2="18" transform="translate(753.477 219.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <line y2="18" transform="translate(743.477 219.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <rect width="25" height="5" transform="translate(736.477 241.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <rect width="31" height="5" transform="translate(733.477 246.36)" stroke-width="1.886" stroke="white;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> </g> </g>

</svg>
        
        <h1  className={styles.FooterName}> by vin galante</h1>
    </div>
</section>
    )
}

export default Footer;