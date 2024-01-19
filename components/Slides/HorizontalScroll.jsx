import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './horizontalscroll.module.scss';

const HorizontalScroll = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const element = containerRef.current;
        const totalWidth = element.scrollWidth;

        const scrollTween = gsap.to(element, {
            x: () => -(totalWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`,
            },
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.horizontalScrollSection}>
            {children}
        </div>
    );
};

export default HorizontalScroll;
