import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import introVideo from "../assets/Video Project 3.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Dynamic 3D Name Tilt Logic
  const mouseX = useMotionValue(0.5);
  // Reverses value mapping if direction feels backwards. Currently: left side (-15 deg), right side (15 deg).
  const rotateY = useTransform(mouseX, [0, 1], [-20, 20]);

  const handleNameMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    mouseX.set(xPos / rect.width);
  };

  const handleNameMouseLeave = () => {
    // Smooth animate back to center
    mouseX.set(0.5);
  };

  const scrollToContact = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="hero-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '0 8vw', position: 'relative' }}>

      {/* Left Column: Name & Roles */}
      <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '50%' }}>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            onMouseMove={handleNameMouseMove}
            onMouseLeave={handleNameMouseLeave}
            style={{
              rotateY,
              perspective: 1000,
              transformStyle: "preserve-3d",
              transition: "transform 0.1s ease-out",
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              letterSpacing: '-0.05em',
              cursor: 'pointer',
              pointerEvents: 'auto'
            }}
          >
            Yug Srivastav
          </motion.h1>
        </motion.div>

        {/* Interactive Floating Role Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'flex-start', maxWidth: '600px' }}
        >
          {['Founder', 'Builder', 'Researcher', 'Student'].map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + (idx * 0.15) }}
              whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 10px 20px rgba(0, 204, 255, 0.4)', borderColor: '#00ccff', color: '#00ccff' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.6rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '0.9rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                pointerEvents: 'auto',
                transition: 'border-color 0.3s, color 0.3s'
              }}
            >
              {role}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            marginTop: '3.5rem',
            fontSize: '1.25rem',
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.4)',
            fontWeight: 300,
            maxWidth: '90%',
            pointerEvents: 'auto',
            letterSpacing: '0.02em'
          }}
        >
          A college student driven by <span style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: 500 }}>entrepreneurship and technology</span>, building solutions to transform <span style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: 500 }}>global trade</span> and supply chains through bold decisions and innovative thinking.
        </motion.p>
      </div>

      {/* Right Column: Custom Video Player */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hero-video-card"
        style={{
          width: '40vw',
          maxWidth: '600px',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0px 20px 50px rgba(0, 204, 255, 0.15)',
          border: '1px solid rgba(0, 204, 255, 0.4)',
          pointerEvents: 'auto'
        }}
      >
        <video
          ref={videoRef}
          src={introVideo}
          className="hero-video"
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          onEnded={() => setIsPlaying(false)}
          muted={isMuted}
        />

        {/* Custom Video Controls Overlay */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))', display: 'flex', gap: '1.5rem', alignItems: 'center', zIndex: 10 }}>
          <button
            onClick={togglePlay}
            style={{ background: 'rgba(0, 204, 255, 0.2)', border: '1px solid #00ccff', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'pointer', transition: 'all 0.2s', pointerEvents: 'auto' }}
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" style={{ marginLeft: '4px' }} />}
          </button>
          <button
            onClick={toggleMute}
            style={{ background: 'transparent', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', transition: 'color 0.2s', pointerEvents: 'auto' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          <span style={{ color: 'rgba(0, 204, 255, 0.8)', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 600, marginLeft: 'auto' }}>
            INTRO REEL
          </span>
        </div>
      </motion.div>

      <motion.nav
        initial={{ y: -50, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hero-nav"
        style={{
          position: 'absolute',
          top: '2.5rem',
          left: '50%',
          display: 'flex',
          gap: '3rem',
          fontSize: '0.9rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          pointerEvents: 'auto'
        }}
      >
        <Link to="/mylife" className="nav-link">My Life</Link>
        <Link to="/pursuits" className="nav-link">Pursuits</Link>
        <Link to="/experiences" className="nav-link">Experiences</Link>
        <Link to="/clubs" className="nav-link">Clubs</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        onClick={scrollToContact}
      >
        <p style={{ marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5, textAlign: 'center' }}>Scroll</p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={24} color="var(--accent-color)" />
        </motion.div>
      </motion.div>
    </div>
  );
}
