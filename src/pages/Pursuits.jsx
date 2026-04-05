import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Pursuits() {
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
        pointerEvents: 'auto',
        overflowY: 'auto'
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
        Pursuits
      </motion.h2>

      {/* Interactive Photo Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8rem' }}>
{/* Innovation & Entrepreneurship Interactive Visual */}
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5, boxShadow: '0 25px 50px rgba(0, 204, 255, 0.4)' }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{
              width: '100%',
              maxWidth: '900px',
              borderRadius: '20px',
              border: '2px solid rgba(0, 204, 255, 0.3)',
              cursor: 'pointer',
              perspective: '1000px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              position: 'relative',
              overflow: 'hidden'
            }}
         >
            {/* Innovation Hub Visualization */}
            <motion.div
               style={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 gap: '25px',
                 width: '100%',
                 padding: '20px'
               }}
            >
               {/* Central Innovation Core */}
               <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    scale: { duration: 3, repeat: Infinity },
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                  }}
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'radial-gradient(circle, #00ccff 0%, rgba(0, 204, 255, 0.3) 70%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
               >
                  <span style={{ color: '#000', fontSize: '24px', fontWeight: 'bold' }}>💡</span>

                  {/* Orbiting Elements */}
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                     style={{
                       position: 'absolute',
                       top: '-10px',
                       left: '50%',
                       transform: 'translateX(-50%)',
                       width: '15px',
                       height: '15px',
                       backgroundColor: '#00ff88',
                       borderRadius: '50%'
                     }}
                  />
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 2 }}
                     style={{
                       position: 'absolute',
                       bottom: '-10px',
                       left: '50%',
                       transform: 'translateX(-50%)',
                       width: '12px',
                       height: '12px',
                       backgroundColor: '#ffcc00',
                       borderRadius: '50%'
                     }}
                  />
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 4 }}
                     style={{
                       position: 'absolute',
                       left: '-10px',
                       top: '50%',
                       transform: 'translateY(-50%)',
                       width: '10px',
                       height: '10px',
                       backgroundColor: '#ff6b6b',
                       borderRadius: '50%'
                     }}
                  />
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 6 }}
                     style={{
                       position: 'absolute',
                       right: '-10px',
                       top: '50%',
                       transform: 'translateY(-50%)',
                       width: '14px',
                       height: '14px',
                       backgroundColor: '#9c88ff',
                       borderRadius: '50%'
                     }}
                  />
               </motion.div>

               {/* Innovation Areas */}
               <div style={{
                 display: 'grid',
                 gridTemplateColumns: 'repeat(2, 1fr)',
                 gap: '20px',
                 width: '100%',
                 maxWidth: '400px'
               }}>
                 {[
                   { icon: '🚀', title: 'Product Design', desc: 'Creating user-centric solutions' },
                   { icon: '💻', title: 'Tech Innovation', desc: 'Exploring emerging technologies' },
                   { icon: '📈', title: 'Business Strategy', desc: 'Building scalable ventures' },
                   { icon: '🌐', title: 'Digital Transformation', desc: 'Modernizing systems & processes' }
                 ].map((area, index) => (
                   <motion.div
                     key={area.title}
                     animate={{
                       y: [0, -5, 0],
                       backgroundColor: [
                         'rgba(0, 204, 255, 0.05)',
                         'rgba(0, 204, 255, 0.1)',
                         'rgba(0, 204, 255, 0.05)'
                       ]
                     }}
                     transition={{
                       duration: 2.5,
                       repeat: Infinity,
                       delay: index * 0.3
                     }}
                     style={{
                       padding: '15px',
                       borderRadius: '10px',
                       border: '1px solid rgba(0, 204, 255, 0.2)',
                       textAlign: 'center'
                     }}
                   >
                     <div style={{ fontSize: '24px', marginBottom: '8px' }}>{area.icon}</div>
                     <div style={{ color: '#00ccff', fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>
                       {area.title}
                     </div>
                     <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px', lineHeight: '1.3' }}>
                       {area.desc}
                     </div>
                   </motion.div>
                 ))}
               </div>

               {/* Progress Indicators */}
               <div style={{
                 display: 'flex',
                 gap: '15px',
                 alignItems: 'center',
                 marginTop: '10px'
               }}>
                 {[
                   { skill: 'Innovation', level: 85 },
                   { skill: 'Problem Solving', level: 90 },
                   { skill: 'Leadership', level: 75 }
                 ].map((skill, index) => (
                   <motion.div
                     key={skill.skill}
                     style={{
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'center',
                       gap: '5px'
                     }}
                   >
                     <div style={{ color: '#00ccff', fontSize: '10px', fontWeight: 'bold' }}>
                       {skill.skill}
                     </div>
                     <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 2, delay: index * 0.5 }}
                        style={{
                          width: '60px',
                          height: '4px',
                          backgroundColor: '#00ccff',
                          borderRadius: '2px'
                        }}
                     />
                     <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '9px' }}>
                       {skill.level}%
                     </div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>

            {/* Floating Innovation Elements */}
            <motion.div
               animate={{
                 y: [0, -8, 0],
                 opacity: [0.5, 1, 0.5]
               }}
               transition={{
                 duration: 3,
                 repeat: Infinity,
                 ease: 'easeInOut'
               }}
               style={{
                 position: 'absolute',
                 top: '20px',
                 right: '25px',
                 color: 'rgba(0, 204, 255, 0.7)',
                 fontSize: '14px',
                 fontWeight: 'bold'
               }}
            >
               ⚡ Active
            </motion.div>

            <motion.div
               animate={{
                 x: [0, 5, -5, 0],
                 opacity: [0.4, 0.8, 0.4]
               }}
               transition={{
                 duration: 4,
                 repeat: Infinity,
                 ease: 'easeInOut'
               }}
               style={{
                 position: 'absolute',
                 bottom: '20px',
                 left: '25px',
                 color: 'rgba(0, 204, 255, 0.6)',
                 fontSize: '12px'
               }}
            >
               Continuous Innovation
            </motion.div>
         </motion.div>

         {/* Info Block */}
         <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ width: '100%', maxWidth: '800px', marginTop: '3rem', textAlign: 'center' }}
         >
            <h3 style={{ fontSize: '2.2rem', color: '#00ccff', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '0.02em' }}>
               Innovation & Entrepreneurship
            </h3>
            <div style={{ width: '50px', height: '4px', backgroundColor: '#00ccff', margin: '0 auto 1.5rem auto', borderRadius: '2px' }} />
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 300 }}>
               Passionate about building at the intersection of technology and entrepreneurship, exploring emerging technologies and creating user centric digital products that can scale into impactful ventures. Participated in the BITS Pilani Startup Launchpad, gaining exposure to early stage venture building while engaging with founders, mentors, and senior leadership from Birla Institute of Technology and Science, Pilani within the startup ecosystem.
            </p>
         </motion.div>

         {/* --- GROWW ENTRY --- */}
         <div style={{ width: '150px', height: '1px', backgroundColor: 'rgba(0, 204, 255, 0.4)', margin: '8rem auto 6rem auto' }} />

         {/* Groww Fintech Interactive Visual */}
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5, boxShadow: '0 25px 50px rgba(0, 204, 255, 0.4)' }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{
              width: '100%',
              maxWidth: '900px',
              borderRadius: '20px',
              border: '2px solid rgba(0, 204, 255, 0.3)',
              cursor: 'pointer',
              perspective: '1000px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '350px',
              position: 'relative',
              overflow: 'hidden'
            }}
         >
            {/* Investment Portfolio Dashboard Mockup */}
            <motion.div
               style={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 gap: '20px',
                 width: '100%',
                 padding: '20px'
               }}
            >
               {/* Header */}
               <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px'
                  }}
               >
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                     style={{
                       width: '30px',
                       height: '30px',
                       backgroundColor: '#00ccff',
                       borderRadius: '50%',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}
                  >
                     <span style={{ color: '#000', fontSize: '16px', fontWeight: 'bold' }}>₹</span>
                  </motion.div>
                  <span style={{ color: '#00ccff', fontSize: '18px', fontWeight: 'bold' }}>Groww Portfolio</span>
               </motion.div>

               {/* Portfolio Value */}
               <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
               >
                  <div style={{ color: '#00ccff', fontSize: '24px', fontWeight: 'bold' }}>₹2,45,678</div>
                  <div style={{ color: 'rgba(0, 204, 255, 0.7)', fontSize: '14px' }}>+12.5% this month</div>
               </motion.div>

               {/* Stock Holdings */}
               <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                 {[
                   { symbol: 'RELIANCE', value: '₹45,230', change: '+2.3%' },
                   { symbol: 'TCS', value: '₹67,890', change: '+1.8%' },
                   { symbol: 'INFY', value: '₹32,450', change: '-0.5%' }
                 ].map((stock, index) => (
                   <motion.div
                     key={stock.symbol}
                     animate={{
                       y: [0, -5, 0],
                       backgroundColor: [
                         'rgba(0, 204, 255, 0.1)',
                         'rgba(0, 204, 255, 0.15)',
                         'rgba(0, 204, 255, 0.1)'
                       ]
                     }}
                     transition={{
                       duration: 2,
                       repeat: Infinity,
                       delay: index * 0.3
                     }}
                     style={{
                       padding: '12px 16px',
                       borderRadius: '8px',
                       border: '1px solid rgba(0, 204, 255, 0.2)',
                       minWidth: '120px',
                       textAlign: 'center'
                     }}
                   >
                     <div style={{ color: '#00ccff', fontSize: '12px', fontWeight: 'bold' }}>{stock.symbol}</div>
                     <div style={{ color: '#fff', fontSize: '14px', margin: '4px 0' }}>{stock.value}</div>
                     <div style={{
                       color: stock.change.startsWith('+') ? '#00ff88' : '#ff4444',
                       fontSize: '11px'
                     }}>
                       {stock.change}
                     </div>
                   </motion.div>
                 ))}
               </div>

               {/* Analytics Chart */}
               <motion.div
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'space-between',
                    marginTop: '20px'
                  }}
               >
                 {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.3, 0.75].map((height, index) => (
                   <motion.div
                     key={index}
                     animate={{
                       height: `${height * 50}px`,
                       backgroundColor: index === 3 ? '#00ccff' : 'rgba(0, 204, 255, 0.6)'
                     }}
                     transition={{
                       duration: 1.5,
                       repeat: Infinity,
                       repeatType: 'reverse',
                       delay: index * 0.1
                     }}
                     style={{
                       width: '20px',
                       borderRadius: '2px',
                       minHeight: '5px'
                     }}
                   />
                 ))}
               </motion.div>
            </motion.div>

            {/* Floating UI Elements */}
            <motion.div
               animate={{
                 x: [0, 10, 0],
                 opacity: [0.5, 1, 0.5]
               }}
               transition={{
                 duration: 3,
                 repeat: Infinity,
                 ease: 'easeInOut'
               }}
               style={{
                 position: 'absolute',
                 top: '15px',
                 right: '20px',
                 color: 'rgba(0, 204, 255, 0.6)',
                 fontSize: '12px',
                 fontWeight: 'bold'
               }}
            >
               📈 Analytics
            </motion.div>
         </motion.div>

         <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ width: '100%', maxWidth: '800px', marginTop: '3rem', textAlign: 'center' }}
         >
            <h3 style={{ fontSize: '2.2rem', color: '#00ccff', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '0.02em' }}>
               Fintech Product Systems Exploration – Groww Ecosystem
            </h3>
            <div style={{ width: '50px', height: '4px', backgroundColor: '#00ccff', margin: '0 auto 1.5rem auto', borderRadius: '2px' }} />
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 300 }}>
               Studied the product architecture of Groww, analyzing key user journeys such as onboarding, investment discovery, and portfolio analytics. Worked alongside seniors and industry professionals to evaluate product decisions and explore improvements in investment UX, portfolio insights, and financial product design.
            </p>
         </motion.div>

         {/* --- EXIM RESEARCH ENTRY --- */}
         <div style={{ width: '150px', height: '1px', backgroundColor: 'rgba(0, 204, 255, 0.4)', margin: '8rem auto 6rem auto' }} />

         {/* EXIM Research Interactive Visual */}
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5, boxShadow: '0 25px 50px rgba(0, 204, 255, 0.4)' }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{
              width: '100%',
              maxWidth: '900px',
              borderRadius: '20px',
              border: '2px solid rgba(0, 204, 255, 0.3)',
              cursor: 'pointer',
              perspective: '1000px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '350px',
              position: 'relative',
              overflow: 'hidden'
            }}
         >
            {/* Global Trade Network Visualization */}
            <motion.div
               style={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 gap: '20px',
                 width: '100%',
                 padding: '20px'
               }}
            >
               {/* World Map Nodes */}
               <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 gap: '40px',
                 marginBottom: '20px'
               }}>
                 {/* India Node */}
                 <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 rgba(0, 204, 255, 0.4)',
                        '0 0 20px rgba(0, 204, 255, 0.8)',
                        '0 0 0 rgba(0, 204, 255, 0.4)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#00ccff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}
                 >
                    <span style={{ color: '#000', fontSize: '12px', fontWeight: 'bold' }}>🇮🇳</span>
                    <div style={{
                      position: 'absolute',
                      bottom: '-25px',
                      color: '#00ccff',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>
                      INDIA
                    </div>
                 </motion.div>

                 {/* Connection Lines */}
                 <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      width: '80px',
                      height: '2px',
                      background: 'linear-gradient(90deg, rgba(0, 204, 255, 0.3), rgba(0, 204, 255, 0.8), rgba(0, 204, 255, 0.3))',
                      borderRadius: '1px'
                    }}
                 />

                 {/* Global Nodes */}
                 {[
                   { country: '🇺🇸 USA', delay: 0 },
                   { country: '🇨🇳 China', delay: 0.5 },
                   { country: '🇩🇪 Germany', delay: 1 }
                 ].map((node, index) => (
                   <motion.div
                     key={node.country}
                     animate={{
                       scale: [1, 1.1, 1],
                       opacity: [0.7, 1, 0.7]
                     }}
                     transition={{
                       duration: 2.5,
                       repeat: Infinity,
                       delay: node.delay
                     }}
                     style={{
                       width: '50px',
                       height: '50px',
                       backgroundColor: 'rgba(0, 204, 255, 0.6)',
                       borderRadius: '50%',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}
                   >
                      <span style={{ fontSize: '10px' }}>{node.country.split(' ')[0]}</span>
                      <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        color: 'rgba(0, 204, 255, 0.8)',
                        fontSize: '8px',
                        fontWeight: 'bold'
                      }}>
                        {node.country.split(' ')[1]}
                      </div>
                   </motion.div>
                 ))}
               </div>

               {/* Digital Barriers Indicators */}
               <div style={{
                 display: 'flex',
                 gap: '20px',
                 flexWrap: 'wrap',
                 justifyContent: 'center',
                 marginTop: '10px'
               }}>
                 {[
                   { barrier: 'Legacy Systems', level: 80 },
                   { barrier: 'Digital Literacy', level: 65 },
                   { barrier: 'Infrastructure', level: 70 },
                   { barrier: 'Regulatory', level: 55 }
                 ].map((item, index) => (
                   <motion.div
                     key={item.barrier}
                     animate={{
                       y: [0, -3, 0],
                       backgroundColor: [
                         'rgba(255, 100, 100, 0.1)',
                         'rgba(255, 100, 100, 0.2)',
                         'rgba(255, 100, 100, 0.1)'
                       ]
                     }}
                     transition={{
                       duration: 2,
                       repeat: Infinity,
                       delay: index * 0.2
                     }}
                     style={{
                       padding: '10px 12px',
                       borderRadius: '6px',
                       border: '1px solid rgba(255, 100, 100, 0.3)',
                       textAlign: 'center',
                       minWidth: '100px'
                     }}
                   >
                     <div style={{ color: '#ff6464', fontSize: '10px', fontWeight: 'bold', marginBottom: '5px' }}>
                       {item.barrier}
                     </div>
                     <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 2, delay: index * 0.3 }}
                        style={{
                          height: '4px',
                          backgroundColor: '#ff6464',
                          borderRadius: '2px'
                        }}
                     />
                     <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '9px', marginTop: '3px' }}>
                       {item.level}% barrier
                     </div>
                   </motion.div>
                 ))}
               </div>

               {/* Solution Indicator */}
               <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 0 rgba(0, 255, 136, 0.4)',
                      '0 0 15px rgba(0, 255, 136, 0.8)',
                      '0 0 0 rgba(0, 255, 136, 0.4)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    border: '1px solid rgba(0, 255, 136, 0.4)',
                    borderRadius: '20px',
                    marginTop: '15px'
                  }}
               >
                  <span style={{ color: '#00ff88', fontSize: '12px', fontWeight: 'bold' }}>
                    🚀 Digital Transformation
                  </span>
               </motion.div>
            </motion.div>

            {/* Floating Research Elements */}
            <motion.div
               animate={{
                 rotate: [0, 5, -5, 0],
                 opacity: [0.5, 1, 0.5]
               }}
               transition={{
                 duration: 4,
                 repeat: Infinity,
                 ease: 'easeInOut'
               }}
               style={{
                 position: 'absolute',
                 top: '15px',
                 left: '20px',
                 color: 'rgba(0, 204, 255, 0.6)',
                 fontSize: '12px',
                 fontWeight: 'bold'
               }}
            >
               📊 Research
            </motion.div>
         </motion.div>

         <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ width: '100%', maxWidth: '800px', marginTop: '3rem', textAlign: 'center' }}
         >
            <h3 style={{ fontSize: '2.2rem', color: '#00ccff', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '0.02em', lineHeight: 1.3 }}>
               Barriers to Digital Adoption in India’s EXIM Sector
            </h3>
            <div style={{ width: '50px', height: '4px', backgroundColor: '#00ccff', margin: '0 auto 1.5rem auto', borderRadius: '2px' }} />
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 300 }}>
               Authored a research paper examining the technological and operational barriers slowing digital adoption in India’s export–import ecosystem, with observations on how improved digital infrastructure could enhance efficiency, transparency, and global trade participation.
            </p>
         </motion.div>

         {/* --- STOCK MARKET ENTRY --- */}
         <div style={{ width: '150px', height: '1px', backgroundColor: 'rgba(0, 204, 255, 0.4)', margin: '8rem auto 6rem auto' }} />

         {/* Stock Market Interactive Visual */}
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5, boxShadow: '0 25px 50px rgba(0, 204, 255, 0.4)' }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{
              width: '100%',
              maxWidth: '900px',
              borderRadius: '20px',
              border: '2px solid rgba(0, 204, 255, 0.3)',
              cursor: 'pointer',
              perspective: '1000px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '350px',
              position: 'relative',
              overflow: 'hidden'
            }}
         >
            {/* Stock Market Dashboard */}
            <motion.div
               style={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 gap: '20px',
                 width: '100%',
                 padding: '20px'
               }}
            >
               {/* Portfolio Header */}
               <motion.div
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    textAlign: 'center',
                    marginBottom: '10px'
                  }}
               >
                  <div style={{ color: '#00ccff', fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>
                     ₹10,000 Investment
                  </div>
                  <div style={{ color: 'rgba(0, 204, 255, 0.7)', fontSize: '14px' }}>
                     Independent Exploration
                  </div>
               </motion.div>

               {/* Current Value Display */}
               <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  style={{
                    backgroundColor: 'rgba(0, 204, 255, 0.1)',
                    border: '1px solid rgba(0, 204, 255, 0.3)',
                    borderRadius: '12px',
                    padding: '15px 25px',
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
               >
                  <div style={{ color: '#00ccff', fontSize: '18px', fontWeight: 'bold' }}>
                     Current Value
                  </div>
                  <div style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', margin: '5px 0' }}>
                     ₹12,450
                  </div>
                  <motion.div
                     animate={{ color: ['#00ff88', '#00ccff', '#00ff88'] }}
                     transition={{ duration: 3, repeat: Infinity }}
                     style={{ fontSize: '14px', fontWeight: 'bold' }}
                  >
                     +24.5% Return
                  </motion.div>
               </motion.div>

               {/* Stock Holdings Grid */}
               <div style={{
                 display: 'grid',
                 gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                 gap: '15px',
                 width: '100%',
                 maxWidth: '500px'
               }}>
                 {[
                   { name: 'Reliance', symbol: 'RELIANCE', shares: 5, avgPrice: 2450, current: 2675, change: '+9.2%' },
                   { name: 'TCS', symbol: 'TCS', shares: 3, avgPrice: 3200, current: 3480, change: '+8.8%' },
                   { name: 'HDFC Bank', symbol: 'HDFCBANK', shares: 8, avgPrice: 1650, current: 1720, change: '+4.2%' },
                   { name: 'Infosys', symbol: 'INFY', shares: 4, avgPrice: 1450, current: 1520, change: '+4.8%' }
                 ].map((stock, index) => (
                   <motion.div
                     key={stock.symbol}
                     animate={{
                       y: [0, -2, 0],
                       borderColor: [
                         'rgba(0, 204, 255, 0.3)',
                         'rgba(0, 204, 255, 0.5)',
                         'rgba(0, 204, 255, 0.3)'
                       ]
                     }}
                     transition={{
                       duration: 2,
                       repeat: Infinity,
                       delay: index * 0.2
                     }}
                     style={{
                       backgroundColor: 'rgba(0, 204, 255, 0.05)',
                       border: '1px solid rgba(0, 204, 255, 0.3)',
                       borderRadius: '8px',
                       padding: '12px',
                       textAlign: 'center'
                     }}
                   >
                     <div style={{ color: '#00ccff', fontSize: '11px', fontWeight: 'bold', marginBottom: '5px' }}>
                       {stock.symbol}
                     </div>
                     <div style={{ color: '#fff', fontSize: '13px', fontWeight: 'bold', marginBottom: '3px' }}>
                       ₹{stock.current}
                     </div>
                     <div style={{
                       color: stock.change.startsWith('+') ? '#00ff88' : '#ff4444',
                       fontSize: '10px',
                       fontWeight: 'bold'
                     }}>
                       {stock.change}
                     </div>
                     <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '9px', marginTop: '3px' }}>
                       {stock.shares} shares
                     </div>
                   </motion.div>
                 ))}
               </div>

               {/* Performance Chart */}
               <motion.div
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'space-between',
                    marginTop: '15px'
                  }}
               >
                 {[0.3, 0.5, 0.4, 0.7, 0.6, 0.9, 0.8, 1.0, 0.85, 1.1].map((height, index) => (
                   <motion.div
                     key={index}
                     animate={{
                       height: `${height * 40}px`,
                       backgroundColor: index === 9 ? '#00ff88' : index > 6 ? '#00ccff' : 'rgba(0, 204, 255, 0.6)'
                     }}
                     transition={{
                       duration: 1,
                       repeat: Infinity,
                       repeatType: 'reverse',
                       delay: index * 0.1
                     }}
                     style={{
                       width: '15px',
                       borderRadius: '1px',
                       minHeight: '3px'
                     }}
                   />
                 ))}
               </motion.div>

               {/* Risk Management Indicator */}
               <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    backgroundColor: [
                      'rgba(255, 193, 7, 0.1)',
                      'rgba(255, 193, 7, 0.2)',
                      'rgba(255, 193, 7, 0.1)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid rgba(255, 193, 7, 0.4)',
                    borderRadius: '15px',
                    marginTop: '10px'
                  }}
               >
                  <span style={{ color: '#ffc107', fontSize: '11px', fontWeight: 'bold' }}>
                     🛡️ Risk Managed
                  </span>
               </motion.div>
            </motion.div>

            {/* Floating Market Elements */}
            <motion.div
               animate={{
                 x: [0, -5, 5, 0],
                 opacity: [0.6, 1, 0.6]
               }}
               transition={{
                 duration: 3,
                 repeat: Infinity,
                 ease: 'easeInOut'
               }}
               style={{
                 position: 'absolute',
                 top: '15px',
                 right: '20px',
                 color: 'rgba(0, 204, 255, 0.7)',
                 fontSize: '12px',
                 fontWeight: 'bold'
               }}
            >
               📈 BSE/NSE
            </motion.div>
         </motion.div>

         <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ width: '100%', maxWidth: '800px', marginTop: '3rem', textAlign: 'center' }}
         >
            <h3 style={{ fontSize: '2.2rem', color: '#00ccff', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '0.02em', lineHeight: 1.3 }}>
               Stock Market Investing – Independent Exploration
            </h3>
            <div style={{ width: '50px', height: '4px', backgroundColor: '#00ccff', margin: '0 auto 1.5rem auto', borderRadius: '2px' }} />
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 300 }}>
               Committed ₹10,000 of personal capital to actively explore stock market investing while studying fundamental analysis, portfolio allocation, and risk management. Focused on long-term value creation and understanding market dynamics through hands-on experience.
            </p>
         </motion.div>
      </div>

    </motion.div>
  );
}
