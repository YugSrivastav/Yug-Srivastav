import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Award, Briefcase, Users } from 'lucide-react';

const ExperienceItem = ({ icon, title, subtitle, meta, description, tags }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6 }}
    style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', width: '100%' }}
  >
    {/* Left Column: Icon Container */}
    <div style={{
      flexShrink: 0,
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'rgba(255, 255, 255, 0.8)',
      marginTop: '0.2rem' // slightly drops icon to visually align with title baseline
    }}>
      {icon}
    </div>

    {/* Right Column: Content */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h3 style={{
        fontSize: '1.6rem',
        fontWeight: 700,
        color: '#ffffff',
        margin: '0 0 0.3rem 0',
        letterSpacing: '-0.01em'
      }}>
        {title}
      </h3>

      {subtitle && (
        <h4 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.5)',
          margin: '0 0 0.3rem 0'
        }}>
          {subtitle}
        </h4>
      )}

      <p style={{
        fontSize: '0.8rem',
        color: 'rgba(255, 255, 255, 0.3)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '0 0 1.5rem 0',
        fontWeight: 500
      }}>
        {meta}
      </p>

      <p style={{
        fontSize: '1.05rem',
        color: 'rgba(255, 255, 255, 0.65)',
        lineHeight: 1.7,
        fontWeight: 300,
        maxWidth: '850px',
        margin: 0
      }}>
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div style={{ marginTop: '2.5rem' }}>
          <p style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            KEY FOCUS AREAS
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {tags.map((tag, idx) => (
              <span key={idx} style={{
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.85rem',
                fontWeight: 400
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

export default function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      style={{
        minHeight: '100vh',
        padding: '4rem 10%',
        paddingBottom: '20vh', // Strategic space for 3D explosion
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
        Experiences
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px' }}>
        <ExperienceItem
          icon={<Sparkles size={28} strokeWidth={1.5} />}
          title="TechSparks 2024 — YourStory"
          subtitle="YourStory"
          meta="ATTENDEE — MARCH 2024"
          description="Participated in TechSparks 2024, one of India's leading startup and technology conferences, engaging with founders, investors, and entrepreneurs from across the startup ecosystem. Interacted with startup ecosystem leaders including Ankur Warikoo, Sharan Hegde, Anupam Mittal, and Sagar Daryani, gaining insights into entrepreneurship and startup building."
        />

        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />

        <ExperienceItem
          icon={<Award size={28} strokeWidth={1.5} />}
          title="INSPIRE Award Winner"
          subtitle="Department of Science & Technology, Government of India"
          meta="RUDRAPUR, UTTARAKHAND — MARCH 2024"
          description="Received the INSPIRE Award from the Government of India for developing an agriculture monitoring system. The recognition included the INSPIRE Scholarship for innovation in science and technology."
        />

        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />

        <ExperienceItem
          icon={<Briefcase size={28} strokeWidth={1.5} />}
          title="Entrepreneurship Trainee — Young Entrepreneurs BootCamp (YEB)"
          subtitle="Birla Institute of Technology and Science, Pilani"
          meta="ON-SITE — JANUARY 2024"
          description="Selected for the Young Entrepreneurs BootCamp at BITS Pilani, an intensive entrepreneurship program designed to nurture startup thinking and leadership skills. Chosen from a competitive pool of ~1000 applicants, the program involved startup pitching, business model discussions, and mentorship sessions with industry leaders and academic experts."
          tags={['Entrepreneurship', 'Startup Strategy', 'Social Innovation']}
        />

        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />

        <ExperienceItem
          icon={<Users size={28} strokeWidth={1.5} />}
          title="Student Volunteer — AI & Machine Learning Workshop"
          subtitle="Indian Institute of Technology Delhi"
          meta="ON-SITE — MARCH 2024"
          description="Contributed as a volunteer during an AI & Machine Learning workshop at IIT Delhi, assisting in organizing technical sessions and facilitating learning activities for participants. Engaged with cutting-edge discussions around artificial intelligence, machine learning applications, and emerging technologies, while supporting the operational execution of the event."
          tags={['Artificial Intelligence (AI)']}
        />
      </div>

    </motion.div>
  );
}
