// src/pages/GenericPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function GenericPage({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      style={{ minHeight: '100vh', padding: '4rem 4rem' }}
    >
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', cursor: 'pointer' }} className="nav-link">
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>
      <h2 style={{ fontSize: '4rem', fontWeight: 700, textTransform: 'uppercase' }}>{title}</h2>
      <div style={{ marginTop: '2rem', maxWidth: '600px', lineHeight: 1.6, opacity: 0.8 }}>
        <p>too lazy to add everything at once</p>
      </div>
    </motion.div>
  );
}
