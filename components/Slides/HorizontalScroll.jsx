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
            <p className={styles.para1}>Unlock the power of your brand's unique narrative with our breakthrough digital marketing agency. At the heart of every successful brand lies a compelling story that resonates with its audience, creating lasting connections and driving engagement. We specialize in weaving these narratives into every facet of your digital presence, from innovative social media campaigns to dynamic web content, ensuring your brand not only stands out but speaks directly to the hearts and minds of your customers.</p>
               <h1  className={styles.Head1}>Create a brand with a <span className={styles.story}>story</span></h1>

               {/* <div style={{  position: 'absolute', left: '1100px', top: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} > */}
            <svg id="drone" className={styles.drone} width="230px" height="300px" viewBox="0 0 150 10" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M19.53 28.49a3.852 3.852 0 0 0-3.533 2.343C6.706 31.364-.029 32.257 0 32.955c.027.693 6.712.997 15.928.724c.32.862.936 1.58 1.738 2.027H16.17v2.742h-1.83a.874.874 0 0 0-.875.874v1.954c0 .483.391.874.874.874h12.316c3.103.73 3.45 1.843 5.774 3.88c-.38 2.113-.94 4.42-1.378 6.414v16.973a2.092 2.092 0 1 0 4.185 0V61.21c-.048-6.9 1.066-9.69 4.905-15.031l.965-.448c0 4.146 2.866 4.395 6.908 5.32h-3.036c-.924 0-1.674.75-1.674 1.675v10c0 .924.75 1.674 1.674 1.674h10.044c.924 0 1.674-.75 1.674-1.674v-10c0-.925-.75-1.674-1.674-1.674h-3.033c4.041-.928 6.905-1.176 6.905-5.321l.965.448c4.857 5.026 4.905 8.447 4.905 15.03v8.207a2.092 2.092 0 0 0 4.185 0V52.444c-.513-2.191-1.062-4.487-1.58-6.762c2.199-2.155 3.101-2.64 5.956-3.532h12.336a.874.874 0 0 0 .874-.874v-1.954a.874.874 0 0 0-.874-.874H83.83v-2.742h-1.496a3.852 3.852 0 0 0 1.738-2.027c9.216.273 15.901-.031 15.928-.724c.029-.698-6.706-1.59-15.997-2.122a3.852 3.852 0 0 0-6.943-.302c-9.307-.283-16.103.018-16.142.716c-.029.693 6.615 1.58 15.827 2.112a3.852 3.852 0 0 0 1.839 2.347h-1.496v2.742C67.654 38.426 60.352 33.685 50 33.49c-10.003.212-18.38 4.958-27.088 4.958v-2.742h-1.496a3.852 3.852 0 0 0 1.839-2.347c9.212-.532 15.856-1.42 15.827-2.112c-.039-.698-6.835-1-16.142-.716a3.852 3.852 0 0 0-3.41-2.04zM50 53.503c2.347 0 4.276 1.929 4.276 4.276c0 2.347-1.929 4.277-4.276 4.277c-2.347 0-4.278-1.93-4.278-4.277c0-2.347 1.93-4.276 4.278-4.276zm0 2.51c-.99 0-1.767.776-1.767 1.766s.777 1.766 1.767 1.766c.99 0 1.765-.776 1.765-1.766S50.99 56.013 50 56.013z" fill="#636363"/>

</g>

</svg>
            

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
                     <img src="./site5.png" className={styles.site1} />
                     <img src="./site1.png" className={styles.site2} />
                     <img src="./site4.png" className={styles.site3} />
                     <img src="./site2.png" className={styles.site4} />
                     <img src="./site3.png" className={styles.site5} />
                   </div>
                </div>
                <div className={`${styles.ScrollSection} ${styles.ScrollThree}`}>
                 
                    <h1 className={styles.Head3}></h1>
                     
                    <svg   className={styles.circle} width="800px" height="500px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4V6.4C12.75 6.81421 12.4142 7.15 12 7.15C11.5858 7.15 11.25 6.81421 11.25 6.4V4C11.25 3.58579 11.5858 3.25 12 3.25ZM18.1872 5.81282C18.4801 6.10571 18.4801 6.58058 18.1872 6.87348L16.4901 8.57053C16.1972 8.86343 15.7224 8.86343 15.4295 8.57053C15.1366 8.27764 15.1366 7.80277 15.4295 7.50987L17.1265 5.81282C17.4194 5.51992 17.8943 5.51992 18.1872 5.81282ZM5.8126 5.81299C6.1055 5.5201 6.58037 5.5201 6.87326 5.81299L8.57032 7.51005C8.86321 7.80294 8.86321 8.27782 8.57032 8.57071C8.27743 8.8636 7.80255 8.8636 7.50966 8.57071L5.8126 6.87365C5.51971 6.58076 5.51971 6.10589 5.8126 5.81299ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H6.4C6.81421 11.25 7.15 11.5858 7.15 12C7.15 12.4142 6.81421 12.75 6.4 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM16.85 12C16.85 11.5858 17.1858 11.25 17.6 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H17.6C17.1858 12.75 16.85 12.4142 16.85 12ZM8.57053 15.4295C8.86343 15.7224 8.86343 16.1972 8.57053 16.4901L6.87348 18.1872C6.58058 18.4801 6.10571 18.4801 5.81282 18.1872C5.51992 17.8943 5.51992 17.4194 5.81282 17.1265L7.50987 15.4295C7.80276 15.1366 8.27764 15.1366 8.57053 15.4295ZM15.4293 15.4296C15.7221 15.1368 16.197 15.1368 16.4899 15.4296L18.187 17.1267C18.4799 17.4196 18.4799 17.8945 18.187 18.1874C17.8941 18.4803 17.4192 18.4803 17.1263 18.1874L15.4293 16.4903C15.1364 16.1974 15.1364 15.7225 15.4293 15.4296ZM12 16.85C12.4142 16.85 12.75 17.1858 12.75 17.6V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.6C11.25 17.1858 11.5858 16.85 12 16.85Z" fill="#a57bee"/>
                  </svg> 
                </div>
            </div>
        </section>
    );
}

export default HorizontalScroll;