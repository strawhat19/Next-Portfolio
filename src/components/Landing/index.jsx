'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { slideUp } from './animation';
import styles from './style.module.scss';
import { ScrollTrigger } from 'gsap/all';
import { img } from '@/common/lib/constants';
import { useRef, useLayoutEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Home() {

  const slider = useRef(null);
  const heroBG = useRef(null);
  const tagline = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);

  const isInView = useInView(tagline);

  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(heroBG.current, {
      scale: 1.18,
      ease: `none`,
      scrollTrigger: {
        scrub: true,
        start: `top top`,
        end: window.innerHeight,
        trigger: document.documentElement,
      },
    });

    gsap.to(slider.current, {
      scrollTrigger: {
        start: 0,
        scrub: 0.25,
        end: window.innerHeight,
        trigger: document.documentElement,
        onUpdate: e => direction = (e.direction * -1)
      },
      x: "-500px",
    })

    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if(xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <Image 
        src={img}
        fill={true}
        ref={heroBG}
        alt="background"
        className={`heroBG`}
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Full-Stack Developer -</p>
          <p ref={secondText}>Full-Stack Developer -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        {/* <div className={`fsContainer`}> */}
          <span ref={tagline} className={styles.mask}>
            <motion.p animate={isInView ? `open` : `closed`} variants={slideUp}>
              Full-Stack
            </motion.p>
          </span>    
          {/* {`Full-Stack`.split(``).map((letter, index) => {
            <span key={index} className={styles.mask}>
            </span>
          })} */}
        {/* </div> */}
        {/* <p>Full-Stack</p> */}
        <motion.p animate={isInView ? `open` : `closed`} variants={slideUp}>
          Designer // Developer
        </motion.p>
      </div>
    </motion.main>
  )
}
