'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import styles from './LiquidReveal.module.css';
import {
  MAX_TRAIL_POINTS,
  liquidRevealVertexShader,
  liquidRevealFragmentShader,
} from './shaders/liquidReveal';

useTexture.preload('/media/img1.webp');
useTexture.preload('/media/img2.webp');

function LiquidPlane({ faceSrc, helmetSrc, pointerRef, hoveredRef, enableInteractive }) {
  const materialRef = useRef(null);
  const targetVec = useRef(new THREE.Vector2(0.5, 0.5));
  const strengthRef = useRef(Array.from({ length: MAX_TRAIL_POINTS }, () => 0));
  const { viewport } = useThree();

  const [helmetTexture, faceTexture] = useTexture([helmetSrc, faceSrc]);

  useEffect(() => {
    [helmetTexture, faceTexture].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
    });
  }, [helmetTexture, faceTexture]);

  const uniforms = useMemo(() => ({
    uHelmet: { value: helmetTexture },
    uFace: { value: faceTexture },
    uTime: { value: 0 },
    uTrail: {
      value: Array.from({ length: MAX_TRAIL_POINTS }, () => new THREE.Vector2(-2, -2)),
    },
    uTrailStrength: {
      value: Array.from({ length: MAX_TRAIL_POINTS }, () => 0),
    },
    uRadius: { value: 0.2 },
    uNoiseSpeed: { value: 1.45 },
    uNoiseScale: { value: 3.6 },
    uDistortion: { value: 0.24 },
    uBaseReveal: { value: 0 },
  }), [helmetTexture, faceTexture]);

  useFrame(({ clock }, delta) => {
    if (!materialRef.current) {
      return;
    }

    const u = materialRef.current.uniforms;
    const elapsed = clock.getElapsedTime();
    u.uTime.value = elapsed;

    const shouldReveal = enableInteractive && hoveredRef.current;

    const targetX = enableInteractive
      ? pointerRef.current.x
      : 0.5 + Math.sin(elapsed * 1.5) * 0.12;
    const targetY = enableInteractive
      ? pointerRef.current.y
      : 0.5 + Math.cos(elapsed * 1.3) * 0.1;

    targetVec.current.set(targetX, targetY);

    u.uTrail.value[0].lerp(targetVec.current, shouldReveal ? 0.42 : 0.22);

    for (let i = 1; i < MAX_TRAIL_POINTS; i += 1) {
      u.uTrail.value[i].lerp(u.uTrail.value[i - 1], 0.3);
    }

    const strengths = strengthRef.current;
    const primaryTarget = enableInteractive ? (shouldReveal ? 1 : 0) : 0.65;
    const primaryLerp = enableInteractive ? (shouldReveal ? 0.36 : 0.2) : 0.08;

    strengths[0] = THREE.MathUtils.lerp(strengths[0], primaryTarget, primaryLerp);

    for (let i = 1; i < MAX_TRAIL_POINTS; i += 1) {
      const tailTarget = strengths[i - 1] * 0.88;
      strengths[i] = THREE.MathUtils.lerp(strengths[i], tailTarget, 0.32 + i * 0.01);
      strengths[i] = Math.max(strengths[i] - delta * 0.055, 0);
    }

    u.uTrailStrength.value = strengths;
    u.uBaseReveal.value = enableInteractive
      ? 0.0
      : 0.32 + Math.sin(elapsed * 1.8) * 0.08;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        fragmentShader={liquidRevealFragmentShader}
        vertexShader={liquidRevealVertexShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function LiquidReveal({
  faceSrc = '/media/img1.webp',
  helmetSrc = '/media/img2.webp',
  enableInteractive = true,
  trackElementRef = null,
}) {
  const ownSurfaceRef = useRef(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const hoveredRef = useRef(false);

  useEffect(() => {
    const targetEl = trackElementRef?.current || ownSurfaceRef.current;

    if (!targetEl || !enableInteractive) {
      hoveredRef.current = false;
      return undefined;
    }

    const smoothed = { x: 0.5, y: 0.5 };
    const moveX = gsap.quickTo(smoothed, 'x', { duration: 0.14, ease: 'power3.out' });
    const moveY = gsap.quickTo(smoothed, 'y', { duration: 0.14, ease: 'power3.out' });

    const sync = () => {
      pointerRef.current.x = smoothed.x;
      pointerRef.current.y = smoothed.y;
      rafId = requestAnimationFrame(sync);
    };

    let rafId = requestAnimationFrame(sync);

    const onMove = (event) => {
      const rect = targetEl.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = (event.clientY - rect.top) / rect.height;

      moveX(THREE.MathUtils.clamp(nx, 0, 1));
      moveY(THREE.MathUtils.clamp(1 - ny, 0, 1));
    };

    const onEnter = () => {
      hoveredRef.current = true;
    };

    const onLeave = () => {
      hoveredRef.current = false;
      moveX(0.5);
      moveY(0.5);
    };

    targetEl.addEventListener('pointermove', onMove);
    targetEl.addEventListener('pointerenter', onEnter);
    targetEl.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      targetEl.removeEventListener('pointermove', onMove);
      targetEl.removeEventListener('pointerenter', onEnter);
      targetEl.removeEventListener('pointerleave', onLeave);
    };
  }, [enableInteractive, trackElementRef]);

  const dpr = enableInteractive ? [1, 2] : 1;

  return (
    <div
      className={styles.revealSurface}
      ref={ownSurfaceRef}
      role="img"
      aria-label="Liquid reveal portrait blend"
    >
      <Canvas
        className={styles.canvas}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.NoToneMapping,
        }}
        dpr={dpr}
        camera={{ position: [0, 0, 1], fov: 50 }}
      >
        <LiquidPlane
          faceSrc={faceSrc}
          helmetSrc={helmetSrc}
          pointerRef={pointerRef}
          hoveredRef={hoveredRef}
          enableInteractive={enableInteractive}
        />
      </Canvas>
    </div>
  );
}
