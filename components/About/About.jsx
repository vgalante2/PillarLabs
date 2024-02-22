import React, { useEffect, useRef } from 'react';
import styles from './about.module.scss';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";





function About() {
    const HeadingRef = useRef(null);
    const FlashRef = useRef(null); // Use a ref for the container
    const AboveRef = useRef(null);
    const BoxRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

    useEffect(() => {

        const path = document.querySelector('#line path');
        const pathLength = path.getTotalLength();
       

        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        gsap.fromTo(
            "#info-box1",
            { y: 0, opacity: 0 },
            {
                y: 150, opacity: 1, duration: 1.3, ease: 'bounce.out',
                scrollTrigger: {
                    trigger: HeadingRef.current, // Use the ref for the trigger
                    start: "top center", // Start the animation when the top of the container is at the center of the viewport
                    toggleActions: "restart none none reset", // Defines what happens to the animation at certain scroll points
                }
            }
        );

        gsap.fromTo(
            "#info-box2",
            { y: 0, opacity: 0 },
            {
                y: 150, opacity: 1, duration: 1.3, ease: 'bounce.out',
                scrollTrigger: {
                    trigger: HeadingRef.current, // Use the ref for the trigger
                    start: "top center", // Same trigger settings for the second box
                    toggleActions: "restart none none reset",
                }
            }
        );

       gsap.fromTo(path,
         { strokeDashoffset: pathLength },
          {
            strokeDashoffset: 0,
            duration: 1, // Duration is arbitrary, the ScrollTrigger's scrub will control the playback
            ease: 'none',
            scrollTrigger: {
                trigger: FlashRef.current,
                start: "top center", // when the top of the trigger hits the bottom of the viewport
                end: "bottom top", // when the bottom of the trigger hits the top of the viewport
                scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
         }
        );

        gsap.to("#flash", {
            scrollTrigger: {
                trigger: AboveRef.current,
                start: "top center",
                end: "bottom top",
                toggleActions: "play none none reset",
              },
              fill: "#87ecaf",
             duration: 0.5,
             
        }
        );

        gsap.to("#glow", {
            scrollTrigger: {
                trigger: BoxRef.current,
                start: "top top",
                end: "bottom top",
                toggleActions: "play none none reverse",
              },
              color: "white", // The new color
        duration: 0.5, 
        }
        );

        return () => {
            // On cleanup, kill all ScrollTriggers to prevent memory leaks
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

 




  
    return ( 
        <div className={styles.AboutContainer}>
        <div className={styles.AboutContent}>
        <svg className={styles.line} id="line" width="1000" height="744"  viewBox="155 -620 35 2433" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0L12.9848 2433" stroke="url(#paint0_linear_22_2)" strokeWidth="22"/>
<defs>
<linearGradient id="paint0_linear_22_2" x1="11.5" y1="-0.000407899" x2="13.4848" y2="2433" gradientUnits="userSpaceOnUse">
<stop offset="0.32" stopColor="#4DD483"/>
<stop offset="0.402596" stopColor="#62A57D"/>
<stop offset="0.447817" stopColor="#706BA4"/>
<stop offset="0.515" stopColor="#7E4DD4"/>
</linearGradient>
</defs>
</svg>
        <svg  ref={FlashRef} className={styles.svg} width="800px" height="500px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="flash" fillRule="evenodd" clipRule="evenodd" d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4V6.4C12.75 6.81421 12.4142 7.15 12 7.15C11.5858 7.15 11.25 6.81421 11.25 6.4V4C11.25 3.58579 11.5858 3.25 12 3.25ZM18.1872 5.81282C18.4801 6.10571 18.4801 6.58058 18.1872 6.87348L16.4901 8.57053C16.1972 8.86343 15.7224 8.86343 15.4295 8.57053C15.1366 8.27764 15.1366 7.80277 15.4295 7.50987L17.1265 5.81282C17.4194 5.51992 17.8943 5.51992 18.1872 5.81282ZM5.8126 5.81299C6.1055 5.5201 6.58037 5.5201 6.87326 5.81299L8.57032 7.51005C8.86321 7.80294 8.86321 8.27782 8.57032 8.57071C8.27743 8.8636 7.80255 8.8636 7.50966 8.57071L5.8126 6.87365C5.51971 6.58076 5.51971 6.10589 5.8126 5.81299ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H6.4C6.81421 11.25 7.15 11.5858 7.15 12C7.15 12.4142 6.81421 12.75 6.4 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM16.85 12C16.85 11.5858 17.1858 11.25 17.6 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H17.6C17.1858 12.75 16.85 12.4142 16.85 12ZM8.57053 15.4295C8.86343 15.7224 8.86343 16.1972 8.57053 16.4901L6.87348 18.1872C6.58058 18.4801 6.10571 18.4801 5.81282 18.1872C5.51992 17.8943 5.51992 17.4194 5.81282 17.1265L7.50987 15.4295C7.80276 15.1366 8.27764 15.1366 8.57053 15.4295ZM15.4293 15.4296C15.7221 15.1368 16.197 15.1368 16.4899 15.4296L18.187 17.1267C18.4799 17.4196 18.4799 17.8945 18.187 18.1874C17.8941 18.4803 17.4192 18.4803 17.1263 18.1874L15.4293 16.4903C15.1364 16.1974 15.1364 15.7225 15.4293 15.4296ZM12 16.85C12.4142 16.85 12.75 17.1858 12.75 17.6V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V17.6C11.25 17.1858 11.5858 16.85 12 16.85Z" fill="#a57bee"/>
</svg> 
      
         <div   className={styles.TextContainer}>
         <div className={styles.TitleLabsContainer}> {/* New container for title and labs */}
          <h1 id="Heading" ref={HeadingRef} className={styles.AboutTitle}>CREATORS </h1>
          <div className={styles.labs}></div>
          
        </div>
         <p  ref={AboveRef} className={styles.AboutText} >"Each project we undertake is a symphony of precise technical craftsmanship and bold creative vision. Our team of seasoned professionals combines cutting-edge technological solutions with innovative design principles to transform your ideas into reality. We believe that true mastery lies in the seamless integration of the technical and the artistic, ensuring that every detail is meticulously crafted and every concept is brought to life with flair and imagination. From the initial concept to the final product, our commitment is to not only meet but exceed your expectations, delivering results that resonate both technically and artistically."</p>
         </div>
         <div  id="info-container" className={styles.InfoContainer}>
            <div ref={BoxRef} id="info-box1" className={styles.infoBox_One}>
            <h1 className={styles.h_text}> Development </h1>
            <p className={styles.p_text}>Specializing in the creation of bespoke digital products, we are dedicated to bringing your brand to life. Our expertise lies in designing stunning websites, unique logos, and captivating creatives that not only resonate with your audience but also elevate your online presence.</p>
            </div>
            <div id="info-box2" className={styles.infoBox_Two}>
            <h1 className={styles.h_text}> Creatives </h1>
            <p className={styles.p_text}>From breathtaking drone shots that capture a unique perspective, to engaging social media videos that tell your story, and stunning digital art that breaks the conventional boundaries - we bring your ideas to life. Our team combines technical expertise with artistic flair, ensuring every project we undertake is not just visually appealing, but also strategically crafted to resonate with your audience. </p>
            </div>
           
            </div>
           
        </div>

        
       
        <div className={styles.secondContainer}>
        <div className={styles.FirstHalf} >
        <h1 id="glow"  className={styles.secondHead}>ABOVE & beyond </h1>
        </div>
        <div  className={styles.SecondHalf}>
        <svg className={styles.codesvg} width="400px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M14.0303 7.46967C14.3232 7.76256 14.3232 8.23744 14.0303 8.53033L10.5607 12L14.0303 15.4697C14.3232 15.7626 14.3232 16.2374 14.0303 16.5303C13.7374 16.8232 13.2626 16.8232 12.9697 16.5303L8.96967 12.5303C8.67678 12.2374 8.67678 11.7626 8.96967 11.4697L12.9697 7.46967C13.2626 7.17678 13.7374 7.17678 14.0303 7.46967Z" fill="#87ecaf"/>
</svg>
        <p className={styles.secondText}> Embark on a transformative journey with our skilled team of developers, designers, editors, and digital artisans, each committed to elevating your business's digital presence to unprecedented heights. Harness the full potential of innovation as we blend cutting-edge technology with creative prowess, ensuring that every digital asset we touch evolves into a mind-blowing masterpiece. With us, your vision will not only take shape but will be brought to life in ways that captivate, engage, and leave a lasting impact. </p>
        <svg className={styles.codesvg} width="400px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z" fill="#87ecaf"/>
</svg>
        </div>
        </div>
      </div>
  )
}

export default About;