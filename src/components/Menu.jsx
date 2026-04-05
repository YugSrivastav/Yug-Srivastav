import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function GlobalMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { x: '-100%', transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    open: { x: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <div 
        className="menu-toggle"
        style={{ 
          position: 'fixed', 
          top: '2rem', 
          right: '2rem', 
          zIndex: 100, 
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: '0.8rem',
          pointerEvents: 'auto'
        }}
        onClick={toggleMenu}
      >
        <div style={{ 
            padding: '0.5rem', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '50%', 
            backdropFilter: 'blur(10px)', 
            border: '1px solid rgba(0, 204, 255, 0.3)',
            display: 'flex',
            boxShadow: '0 0 15px rgba(0, 204, 255, 0.1)'
        }}>
          {isOpen ? <X size={24} color="#00ccff" /> : <MenuIcon size={24} color="#00ccff" />}
        </div>
        <span style={{ fontWeight: 'bold', letterSpacing: '0.15em', color: '#00ccff', fontSize: '0.9rem' }}>
          {isOpen ? 'CLOSE' : 'MENU'}
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(25px)',
              zIndex: 90,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '10%',
              pointerEvents: 'auto'
            }}
          >
            {['Home', 'My Life', 'Pursuits', 'Experiences', 'Clubs', 'Gallery'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`;
              return (
                <motion.div key={item} variants={itemVariants}>
                  <Link 
                    to={path} 
                    onClick={toggleMenu}
                    style={{ 
                      fontSize: '5rem', 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      display: 'inline-block', 
                      margin: '0.5rem 0',
                      color: 'white',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em'
                    }}
                    className="nav-link-huge"
                  >
                    {item}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
