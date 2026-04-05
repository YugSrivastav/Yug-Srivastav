import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import VideoIntro from '../components/VideoIntro';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '180vh' }}
    >

      <Hero />
      <VideoIntro />
      <Contact />
    </motion.div>
  );
}
