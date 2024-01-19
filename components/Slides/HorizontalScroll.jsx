import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './horizontalscroll.module.scss';
import { useGSAP } from '@gsap/react';



function HorizontalScroll() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const trigger = triggerRef.current;

        if (section && trigger) {
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

            return () => scrollTween.kill();
        }
    }, []);

    return (
        <section className={styles.OutsideScrollSection} ref={triggerRef}>
            <div className={styles.InnerScrollSection} ref={sectionRef}>
                <div className={styles.ScrollSection}>
               <h1 className={styles.Head1}>Create a brand with a story</h1>
                </div>
                <div className={styles.ScrollSection}>
                    <h1 className={styles.Head2}>Add some Personality</h1>
                </div>
                <div className={styles.ScrollSection}>
                    <h1 className={styles.Head3}>and let us bring it to life</h1>
                </div>
            </div>
        </section>
    );
}

export default HorizontalScroll;