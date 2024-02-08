import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import styles from './horizontalscroll.module.scss';
import { useGSAP } from '@gsap/react';



function HorizontalScroll() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    // const SvgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);



        const section = sectionRef.current;
        const trigger = triggerRef.current;
       

        if (section && trigger) {
            // Horizontal scroll animation
            const scrollTween = gsap.fromTo(section,
                { x: 0 },
                {
                    x: () => -(section.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: trigger,
                        start: "top top",
                        end: () => `+=${section.scrollWidth}`,
                        scrub: 0.6,
                        pin: true
                    }
                }
            );

           
    

            return () => {
                scrollTween.kill();
                
            };
        }
    }, []);





    return (
        <section className={styles.OutsideScrollSection} ref={triggerRef}>
            <div className={styles.InnerScrollSection} ref={sectionRef}> 
            <div className={`${styles.ScrollSection} ${styles.ScrollOne}`}>
               <h1  className={styles.Head1}>Create a brand with a story</h1>

               {/* <div style={{  position: 'absolute', left: '1100px', top: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} > */}
            <svg id="drone" className={styles.drone} width="230px" height="300px" viewBox="0 0 150 10" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M19.53 28.49a3.852 3.852 0 0 0-3.533 2.343C6.706 31.364-.029 32.257 0 32.955c.027.693 6.712.997 15.928.724c.32.862.936 1.58 1.738 2.027H16.17v2.742h-1.83a.874.874 0 0 0-.875.874v1.954c0 .483.391.874.874.874h12.316c3.103.73 3.45 1.843 5.774 3.88c-.38 2.113-.94 4.42-1.378 6.414v16.973a2.092 2.092 0 1 0 4.185 0V61.21c-.048-6.9 1.066-9.69 4.905-15.031l.965-.448c0 4.146 2.866 4.395 6.908 5.32h-3.036c-.924 0-1.674.75-1.674 1.675v10c0 .924.75 1.674 1.674 1.674h10.044c.924 0 1.674-.75 1.674-1.674v-10c0-.925-.75-1.674-1.674-1.674h-3.033c4.041-.928 6.905-1.176 6.905-5.321l.965.448c4.857 5.026 4.905 8.447 4.905 15.03v8.207a2.092 2.092 0 0 0 4.185 0V52.444c-.513-2.191-1.062-4.487-1.58-6.762c2.199-2.155 3.101-2.64 5.956-3.532h12.336a.874.874 0 0 0 .874-.874v-1.954a.874.874 0 0 0-.874-.874H83.83v-2.742h-1.496a3.852 3.852 0 0 0 1.738-2.027c9.216.273 15.901-.031 15.928-.724c.029-.698-6.706-1.59-15.997-2.122a3.852 3.852 0 0 0-6.943-.302c-9.307-.283-16.103.018-16.142.716c-.029.693 6.615 1.58 15.827 2.112a3.852 3.852 0 0 0 1.839 2.347h-1.496v2.742C67.654 38.426 60.352 33.685 50 33.49c-10.003.212-18.38 4.958-27.088 4.958v-2.742h-1.496a3.852 3.852 0 0 0 1.839-2.347c9.212-.532 15.856-1.42 15.827-2.112c-.039-.698-6.835-1-16.142-.716a3.852 3.852 0 0 0-3.41-2.04zM50 53.503c2.347 0 4.276 1.929 4.276 4.276c0 2.347-1.929 4.277-4.276 4.277c-2.347 0-4.278-1.93-4.278-4.277c0-2.347 1.93-4.276 4.278-4.276zm0 2.51c-.99 0-1.767.776-1.767 1.766s.777 1.766 1.767 1.766c.99 0 1.765-.776 1.765-1.766S50.99 56.013 50 56.013z" fill="#a57bee"/>

</g>

</svg>
            {/* </div> */}

               {/* <svg className={styles.pillar} width="400px" height="400px" viewBox="-6.55 0 46 46" xmlns="http://www.w3.org/2000/svg" fill="#87ecaf" stroke="#87ecaf">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g transform="translate(-732.362 -205.86)"> <path d="M760.563,214.077c.824-1.493-.337-3.537-2.606-3.537a3.232,3.232,0,0,0-3.252,3.049c-.407,2.236,1.626,3.911,4.015,3.911,3.3,0,6.038-2.278,6.038-5.57a5.575,5.575,0,0,0-5.886-5.57H738.747a5.574,5.574,0,0,0-5.885,5.57,5.882,5.882,0,0,0,6.038,5.8c2.389,0,4.422-1.788,4.015-4.023a3.269,3.269,0,0,0-3.252-3.106c-2.269,0-3.43,2.016-2.606,3.509" fill="none" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.886"/> <line x2="11" transform="translate(743.477 213.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <path d="M758.477,218.36v23h-20v-23" fill="none" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.886"/> <line y2="18" transform="translate(748.477 219.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <line y2="18" transform="translate(753.477 219.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <line y2="18" transform="translate(743.477 219.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <rect width="25" height="5" transform="translate(736.477 241.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> <rect width="31" height="5" transform="translate(733.477 246.36)" stroke-width="1.886" stroke="#87ecaf;" stroke-linecap="round" stroke-linejoin="round" fill="none"/> </g> </g>

</svg> */}

                </div>
                <div className={`${styles.ScrollSection} ${styles.ScrollTwo}`}>
                   <div className={styles.TextSection}>
                   <p className={styles.SmallText2}>we understand the power of a strong brand. In a digital world that's constantly evolving, staying ahead means not just keeping up with the times, but setting the pace. That's where our Brand Makeover service comes in. We specialize in transforming your brand to resonate with today's dynamic market and align with your evolving business goals.</p>
                   <div className={styles.BigTextSection}>
                    <h1 className={styles.Head2}>Brand Makover</h1>
                    <div className={styles.labs}></div>
                    </div>
                   </div>
                   <div className={styles.siteImg}>
                     <img src="./site1.png" className={styles.site1} />
                     <img src="./site5.png" className={styles.site2} />
                     <img src="./site4.png" className={styles.site3} />
                     <img src="./site2.png" className={styles.site4} />
                     <img src="./site3.png" className={styles.site5} />
                   </div>
                </div>
                <div className={`${styles.ScrollSection} ${styles.ScrollThree}`}>
                    <h1 className={styles.Head3}>and let us bring it to life</h1>
                </div>
            </div>
        </section>
    );
}

export default HorizontalScroll;