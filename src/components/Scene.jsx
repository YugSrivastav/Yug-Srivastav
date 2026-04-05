import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';

/**
 * ROBUST SCROLL ENGINE: Universal detection for window, html, and body scroll.
 * This fixes the 'disconnection' reported when internal overflows are used.
 */
function useScrollTracking() {
  const scrollRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollRef.current = st;
      // Real-time verification in Console
      if (st > 0) console.log("SCROLL DETECTED:", Math.round(st));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  return scrollRef;
}

function createPointTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

function createSunGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0, 'rgba(255, 220, 150, 1)');
  gradient.addColorStop(0.2, 'rgba(255, 100, 0, 0.8)');
  gradient.addColorStop(0.5, 'rgba(200, 40, 0, 0.3)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(canvas);
}

function Nebula({ scrollRef, isHome }) {
  const ref = useRef();
  const count = 15000;
  const texture = useMemo(() => createPointTexture(), []);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { positions, colors } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const color1 = new THREE.Color('#ff0066');
    const color2 = new THREE.Color('#00ffff');
    const color3 = new THREE.Color('#9900ff');
    const color4 = new THREE.Color('#ff5500');

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 6 + 1.0;
      const spinAngle = radius * 0.4;
      const branchAngle = ((i % 4) / 4) * Math.PI * 2;
      const spreadX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const spreadY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 1.5;
      const spreadZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const x = Math.cos(branchAngle + spinAngle) * radius + spreadX;
      const y = spreadY + (Math.sin(radius) * 0.5);
      const z = Math.sin(branchAngle + spinAngle) * radius + spreadZ;
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
      const baseColor = color3.clone();
      if (radius > 4.5) { baseColor.lerp(color2, Math.random()); }
      else if (radius > 2.5) { baseColor.lerp(color1, Math.random()); }
      else { baseColor.lerp(color4, Math.random()); }
      c[i * 3] = baseColor.r;
      c[i * 3 + 1] = baseColor.g;
      c[i * 3 + 2] = baseColor.b;
    }
    return { positions: p, colors: c };
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const scrollY = scrollRef.current;

    // Global Nebula physics: respond to scroll везде
    const isActive = isHome;
    const heroFactor = Math.max(0, 1 - scrollY / 700);
    const scrollFactor = Math.min(scrollY / 350, 1);

    ref.current.rotation.y -= (delta / 5) + (scrollY * 0.00034);
    ref.current.rotation.x -= (delta / 10) + (scrollY * 0.00016);
    // Nebula points now remain stationary in space to act as a fixed reference for the camera's dive
    ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.15) * (5.0 * heroFactor);
    ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.08;
    ref.current.position.x = 0;
    ref.current.rotation.z = 0;

    const scalePulse = 1 + scrollFactor * 0.35 + Math.sin(state.clock.elapsedTime * 0.15) * (0.25 * heroFactor);
    ref.current.scale.set(scalePulse, scalePulse, scalePulse);

    const targetX = (mouse.current.x * 0.4);
    const targetY = (mouse.current.y * 0.4);
    ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.02;
    ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.02;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.11} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} vertexColors={true} transparent={true} map={texture} opacity={0.65} />
    </points>
  );
}


function Meteors() {
  const count = 7;
  const lines = useMemo(() => new Array(count).fill().map(() => ({ speed: 15 + Math.random() * 10, visible: false, waitTimer: Math.random() * 2 })), []);
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    if (window.scrollY > 500) return;
    ref.current.children.forEach((group, index) => {
      const data = lines[index];
      if (!data.visible) {
        data.waitTimer -= delta;
        if (data.waitTimer <= 0) {
          data.visible = true;
          group.position.set(6 + Math.random() * 5, 4 + Math.random() * 4, 0 - Math.random() * 2);
          group.scale.set(1, 1, 1);
        }
      } else {
        group.position.x -= data.speed * delta;
        group.position.y -= (data.speed * 0.8) * delta;
        if (group.position.x < -10 || group.position.y < -8) { data.visible = false; data.waitTimer = 2 + Math.random() * 6; group.scale.set(0, 0, 0); }
      }
    });
  });
  return (
    <group ref={ref}>
      {lines.map((data, i) => (
        <group key={i} rotation={[0, 0, 2.25]} scale={[0, 0, 0]}>
          <mesh position={[0, 1.0, 0]}><sphereGeometry args={[0.08, 16, 16]} /><meshStandardMaterial color="#ffffff" emissive="#ffcc00" emissiveIntensity={2.0} /></mesh>
          <mesh position={[0, 0, 0]}><coneGeometry args={[0.04, 2.0, 16]} /><meshBasicMaterial color="#ff7700" transparent opacity={0.6} blending={THREE.AdditiveBlending} /></mesh>
          <pointLight color="#ffaa00" intensity={2.0} distance={4} position={[0, 1.0, 0]} />
        </group>
      ))}
    </group>
  );
}

function MyLifeSun({ scrollRef, isActive }) {
  const groupRef = useRef();
  const sunCoreRef = useRef();
  const glowTexture = useMemo(() => createSunGlowTexture(), []);
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isActive) {
      if (!groupRef.current.visible) groupRef.current.visible = true;
      if (sunCoreRef.current) sunCoreRef.current.rotation.y += delta * 0.1;
      const speed = 4;
      groupRef.current.position.x = ((groupRef.current.position.x + 50 + speed * delta) % 100) - 50;
      const normalizedX = (groupRef.current.position.x + 50) / 100;
      groupRef.current.position.y = -20 + 40 * Math.sin(normalizedX * (Math.PI / 2));
      groupRef.current.position.z = -40;

      // Using the robust scrollRef for growth
      const scrollRefValue = scrollRef.current;
      const growthFactor = scrollRefValue * 0.006; // AGGRESSIVE 0.006 GROWTH
      const activeScale = Math.min(7.0, 1.0 + growthFactor); // Significant cap increase to 7.0x max

      groupRef.current.scale.lerp(new THREE.Vector3(activeScale, activeScale, activeScale), 0.1);
    } else {
      groupRef.current.scale.lerp(new THREE.Vector3(0, 0, 0), 0.1);
      if (groupRef.current.scale.x < 0.01) { groupRef.current.visible = false; groupRef.current.position.x = -50; }
    }
  });

  return (
    <group ref={groupRef} visible={false} position={[-50, 10, -40]} scale={[0, 0, 0]}>
      <mesh ref={sunCoreRef}><icosahedronGeometry args={[5, 12]} /><meshStandardMaterial color="#aa3300" emissive="#cc2200" emissiveIntensity={0.8} roughness={0.6} metalness={0.5} /></mesh>
      <sprite scale={[35, 35, 1]}><spriteMaterial map={glowTexture} color="#ffffff" transparent={true} blending={THREE.AdditiveBlending} depthWrite={false} /></sprite>
      <pointLight color="#ff5500" intensity={80} distance={200} decay={2} />
    </group>
  );
}

function ExperiencesBlackHole({ scrollRef, isActive }) {
  const groupRef = useRef();
  const coreRef = useRef();
  const shockwaveRef = useRef();
  const flashRef = useRef();
  const isDragging = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const targetPos = useRef(new THREE.Vector3(0, 0, -20));
  const burstTimeStart = useRef(-1);
  const hasBurst = useRef(false);

  useEffect(() => {
    const handleDown = () => isDragging.current = true;
    const handleUp = () => isDragging.current = false;
    const handleMove = (e) => { mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1; mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1; };
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mousemove', handleMove);
    return () => { window.removeEventListener('mousedown', handleDown); window.removeEventListener('mouseup', handleUp); window.removeEventListener('mousemove', handleMove); }
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isActive) {
      if (!groupRef.current.visible) groupRef.current.visible = true;
      groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);

      const scrollY = scrollRef.current;
      const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const viewHeight = window.innerHeight;
      const maxScroll = Math.max(1, docHeight - viewHeight);
      const scrollProgress = scrollY / maxScroll;

      // TRIGGER: Only active after scrolling 500px to prevent top-of-page glitches
      const isCharging = scrollY > 500 && scrollProgress > 0.85;
      const isAtBottom = scrollY > 500 && scrollProgress > 0.92;

      if (isAtBottom) {
        if (!hasBurst.current) {
          hasBurst.current = true;
          burstTimeStart.current = state.clock.elapsedTime;
        }
      } else if (scrollProgress < 0.70) {
        hasBurst.current = false;
        burstTimeStart.current = -1;
      }

      if (hasBurst.current && burstTimeStart.current > 0) {
        const timeSinceBurst = state.clock.elapsedTime - burstTimeStart.current;

        if (timeSinceBurst < 0.4) {
          // PHASE 1: Collapse and Flash
          groupRef.current.visible = true;
          const t = timeSinceBurst / 0.4;
          if (coreRef.current) coreRef.current.scale.lerp(new THREE.Vector3(0.01, 0.01, 0.01), 0.3);
          if (shockwaveRef.current) shockwaveRef.current.scale.lerp(new THREE.Vector3(50, 50, 50), 0.2);
          if (flashRef.current) {
            flashRef.current.visible = true;
            flashRef.current.material.opacity = Math.sin(t * Math.PI);
          }
          groupRef.current.rotation.y -= delta * 20.0;
        } else {
          // PHASE 2: Dissipation
          if (coreRef.current) coreRef.current.scale.set(0, 0, 0);
          if (shockwaveRef.current) shockwaveRef.current.scale.lerp(new THREE.Vector3(0.1, 0.1, 0.1), 0.1);
          if (flashRef.current) flashRef.current.visible = false;
          // Hide only when shockwave is gone
          if (shockwaveRef.current && shockwaveRef.current.scale.x < 0.5) groupRef.current.visible = false;
        }
      } else {
        // NORMAL STATE
        groupRef.current.visible = true;
        // Visual indicator that we're close: pulse purple when 'charging'
        if (coreRef.current) {
          coreRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          if (isCharging) {
            coreRef.current.material.color.lerp(new THREE.Color("#440066"), 0.1);
          } else {
            coreRef.current.material.color.lerp(new THREE.Color("#000000"), 0.1);
          }
        }
        if (shockwaveRef.current) shockwaveRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        groupRef.current.rotation.y -= delta * 0.7; groupRef.current.rotation.z += delta * 0.1;
      }

      if (isDragging.current) {
        const fov = state.camera.fov * Math.PI / 180;
        const height = 2 * Math.tan(fov / 2) * (state.camera.position.z + 20);
        const width = height * state.camera.aspect;
        targetPos.current.set((mouse.current.x * width) / 2, (mouse.current.y * height) / 2, -20);
      }
      groupRef.current.position.lerp(targetPos.current, 0.08);
    } else {
      groupRef.current.scale.lerp(new THREE.Vector3(0, 0, 0), 0.15);
      if (groupRef.current.scale.x < 0.01) { groupRef.current.visible = false; targetPos.current.set(0, 0, -20); }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -20]} scale={[0, 0, 0]}>
      {/* The Core Singularity */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Explosion Flash Overlay */}
      <mesh ref={flashRef} visible={false}>
        <sphereGeometry args={[30, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0} side={THREE.BackSide} />
      </mesh>

      {/* Accretion Disk / Shockwave */}
      <group ref={shockwaveRef}>
        <mesh><sphereGeometry args={[2.7, 64, 64]} /><meshBasicMaterial color="#ffffff" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} /></mesh>
        <mesh><sphereGeometry args={[3.3, 64, 64]} /><meshBasicMaterial color="#55ffff" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} /></mesh>
        <mesh rotation={[1.4, 0, 0]}><torusGeometry args={[4.5, 0.8, 64, 128]} /><meshBasicMaterial color="#bbffff" transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
        <mesh rotation={[1.4, 0, 0]}><torusGeometry args={[5.5, 1.5, 64, 128]} /><meshBasicMaterial color="#00aaff" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
      </group>
    </group>
  );
}

function CameraRig({ scrollRef, isHome }) {
  const targetVec = useMemo(() => new THREE.Vector3(), []);
  useFrame((state) => {
    const scrollY = scrollRef.current;

    // Dive logic: FINETUNED INWARD DIVE (0.009)
    const baseDive = scrollY * 0.009;
    const heroMultiplier = isHome ? 1.0 : 0.4;
    const finalZ = 8 - (baseDive * heroMultiplier);

    // Move from z=8 down to a limit of -15.0
    const targetZ = Math.max(-15.0, finalZ);

    // Lateral drift and tilt: Reduced to near-zero to stop the 'moving around' feeling
    const targetX = isHome ? Math.min(scrollY * 0.0005, 1.0) : 0;
    const targetY = isHome ? Math.max(1.0, 3 - scrollY * 0.0001) : 3;
    const targetRotZ = isHome ? -Math.min(scrollY * 0.0001, 0.2) : 0;

    // SOFT LERP: Reduced to 0.03 for a very heavy, smooth tracking feel
    state.camera.position.lerp(targetVec.set(targetX, targetY, targetZ), 0.03);
    state.camera.rotation.z = THREE.MathUtils.lerp(state.camera.rotation.z, targetRotZ, 0.03);

  });
  return null;
}

export default function Scene() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isMyLife = location.pathname === '/mylife';
  const isExperiences = location.pathname === '/experiences';
  const scrollRef = useScrollTracking();

  return (
    <Canvas camera={{ position: [0, 3, 8] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <CameraRig scrollRef={scrollRef} isHome={isHome} />
      <ExperiencesBlackHole scrollRef={scrollRef} isActive={isExperiences} />
      <Meteors />
      <MyLifeSun scrollRef={scrollRef} isActive={isMyLife} />

      <Nebula scrollRef={scrollRef} isHome={isHome} />
      <Preload all />
    </Canvas>
  );
}
