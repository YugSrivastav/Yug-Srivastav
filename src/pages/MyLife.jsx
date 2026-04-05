import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function MyLife() {
  const manifesto = [
    "I love building things.",
    "Complicated systems.\nDifficult problems.\nChallenges most people avoid.",
    "Those are the things that excite me.",
    "Right now, I’m a CSE student at Gautam Buddha University.\nMost of my life at the moment is pretty simple hostel life.",
    "A laptop.\nA few ideas.\nLate nights.\nWalks with friends.\nAnd music loud enough to probably ruin my ears.",
    "Some days are spent building something.\nSome days are spent breaking what I built the day before.\nAnd a lot of days are just experimenting, trying to understand how things work and how they could work better.",
    "College is one part of my life, but most of my learning happens outside the classroom reading, building small projects, and working on ideas.",
    "Most days don’t look very dramatic from the outside.\nJust a hostel room, a laptop screen, random conversations with friends, and too many open tabs.",
    "But I enjoy that process.",
    "I like working on problems that look messy, uncertain, and don’t have clear answers yet.",
    "I fear staying in the same place where I was yesterday.",
    "As they say,\n“Depression can’t hit a moving target.”",
    "So I keep moving.",
    "Trying things.\nBuilding things.\nBreaking things.\nLearning from them.",
    "I know I’m ambitious. Probably more than is healthy.",
    "I want to build things that last things that create real value and reach far beyond my own circle.",
    "Not just something that impacts a few people, but something meaningful enough that people across the world can feel its impact.",
    "Learning.\nBuilding.\nExperimenting.",
    "And trying to move forward a little more every day."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      style={{
        minHeight: '100vh',
        padding: '4rem 10%',
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'auto'
      }}
    >

      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', cursor: 'pointer', color: '#00ccff', textDecoration: 'none', fontWeight: 'bold', letterSpacing: '0.1em' }}>
        <ArrowLeft size={20} />
        <span>BACK TO HOME</span>
      </Link>

      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ fontSize: '5rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4rem', letterSpacing: '-0.02em', color: '#fff' }}
      >
        My Life
      </motion.h2>

      <div style={{ maxWidth: '800px', paddingBottom: '10rem', paddingLeft: '2rem', borderLeft: '2px solid rgba(0, 204, 255, 0.2)' }}>
        {manifesto.map((paragraph, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ marginBottom: '3rem' }}
          >
            {paragraph.split('\n').map((line, j) => (
              <p key={j} style={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '1.4rem',
                lineHeight: 1.8,
                letterSpacing: '0.02em',
                fontWeight: 400
              }}>
                {line}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
