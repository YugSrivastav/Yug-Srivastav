import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FileText } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
      <motion.h2 
        initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ fontSize: '4rem', marginBottom: '4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
      >
        Connect
      </motion.h2>
      
      {/* Social Links Row */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ display: 'flex', gap: '4rem', marginBottom: '5rem' }}
      >
        <SocialIcon href="https://www.linkedin.com/in/yug-srivastav-2646382aa/" icon={<FaLinkedin size={48} />} label="LinkedIn" />
        <SocialIcon href="https://github.com/YugSrivastav/YugSrivastav" icon={<FaGithub size={48} />} label="GitHub" />
        <SocialIcon href="mailto:yug.srivastav99@gmail.com" icon={<FaEnvelope size={48} />} label="Email" />
      </motion.div>

      {/* Resume Button */}
      <motion.a 
        href="/Yug Srivastav CV.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px rgba(0, 204, 255, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.2rem 3.5rem',
          background: 'transparent',
          border: '2px solid #00ccff',
          color: 'white',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          borderRadius: '50px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        <FileText size={28} />
        My Resume
      </motion.a>
    </div>
  );
}

// Sub-component for spinning/hovering icons
function SocialIcon({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -15, color: '#00ccff', filter: 'drop-shadow(0px 0px 15px rgba(0, 204, 255, 0.6))' }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        color: 'white',
        textDecoration: 'none',
        pointerEvents: 'auto',
        opacity: 0.8
      }}
    >
      {icon}
      <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
    </motion.a>
  );
}
