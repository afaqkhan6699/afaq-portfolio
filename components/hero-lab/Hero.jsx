'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import LiquidReveal from './LiquidReveal';

const FACE_SRC = '/media/img1.webp';
const HELMET_SRC = '/media/img2.webp';

export default function Hero() {
  const [canHover, setCanHover] = useState(false);
  const interactiveRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 900px)');
    const sync = () => setCanHover(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const face = new Image();
    const helmet = new Image();
    face.src = FACE_SRC;
    helmet.src = HELMET_SRC;
  }, []);

  return (
    <section className={styles.heroRoot} ref={interactiveRef}>
      <div className={styles.backgroundGrid} />
      <div className={styles.backgroundGlow} />
      <div className={styles.backgroundParticles} />
      <div className={styles.backgroundMedia}>
        <LiquidReveal
          faceSrc={FACE_SRC}
          helmetSrc={HELMET_SRC}
          enableInteractive={canHover}
          trackElementRef={interactiveRef}
        />
      </div>
      <div className={styles.surfaceWash} />

      <motion.div
        className={styles.proCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <div className={styles.proFooter}>
          <span className={styles.proName}>MUHAMMAD AFAQ</span>
          <span className={styles.proDivider} aria-hidden />
          <span className={styles.proRole}>SOFTWARE ENGINEER</span>
        </div>
      </motion.div>
    </section>
  );
}
