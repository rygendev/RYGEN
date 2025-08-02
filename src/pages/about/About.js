import { useNavigate } from 'react-router-dom';
import './About.scss';

const teamMembers = [
  {
    name: 'Ananya Singh',
    role: 'Co‑Founder & CTO',
    photo: 'https://via.placeholder.com/120',
    linkedin: '#',
  },
  {
    name: 'Rohit Kumar',
    role: 'Co‑Founder & Head of Design',
    photo: 'https://via.placeholder.com/120',
    linkedin: '#',
  },
  {
    name: 'Meera Patel',
    role: 'Android Engineer',
    photo: 'https://via.placeholder.com/120',
    linkedin: '#',
  },
  {
    name: 'Arjun Rao',
    role: 'Product & QA Lead',
    photo: 'https://via.placeholder.com/120',
    linkedin: '#',
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero section">
        <div className="text-center hero-inner">
          <h1>About RYGEN</h1>
          <p>
            We’re a passionate Android app studio headquartered in Pondicherry. We build secure, intuitive, and user‑focused mobile apps designed to simplify everyday life and empower productivity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section container">
        <div className="card mission">
          <h2>Our Mission</h2>
          <p>To craft mobile experiences that combine sleek design, smart features, and data privacy—so users can rely on their tools at every step.</p>
        </div>
        <div className="card vision">
          <h2>Our Vision</h2>
          <p>To become the go‑to Android app studio for everyday wellness, productivity, and financial empowerment.</p>
        </div>
      </section>

      {/* Values */}
      <section className="values section">
        <h2>Core Values</h2>
        <div className="values-grid container">
          {[
            { icon: '🚀', title: 'Innovation & Usability' },
            { icon: '🔐', title: 'Security & Privacy' },
            { icon: '📲', title: 'Performance First' },
            { icon: '🎧', title: 'Always Listening' },
          ].map((v, idx) => (
            <div key={idx} className="value-item">
              <span className="icon">{v.icon}</span>
              <p>{v.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="journey section container">
        <h2>Our Story</h2>
        <div className="timeline">
          {[
            { year: 2024, milestone: 'Founded in Pondicherry by two mobile-enamored friends.' },
            { year: 2025, milestone: 'Released Health Tracker beta to 500+ early users.' },
            { year: 2025, milestone: 'Task Manager & Finance Buddy in private beta.' },
          ].map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="year">{item.year}</div>
              <div className="desc">{item.milestone}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team section">
        <h2>Meet the Team</h2>
        <div className="team-grid container">
          {teamMembers.map((m, idx) => (
            <div key={idx} className="team-card">
              <img src={m.photo} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
              <button className="btn-link" onClick={() => window.open(m.linkedin, '_blank')}>
                View LinkedIn
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics / Social Proof */}
      <section className="stats section">
        <div className="container stats-grid">
          {[
            { value: '500+', label: 'Early Access Users' },
            { value: '3', label: 'Apps in Beta' },
            { value: '10K+', label: 'Total Installs (est.)' },
          ].map((s, idx) => (
            <div key={idx} className="stat-item">
              <div className="num">{s.value}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-contact section">
        <div className="container">
          <h2>Interested in partnering or joining us?</h2>
          <p>Let’s talk about what we’re building and how you can be part of this vision.</p>
          <button className="btn-cta" onClick={() => navigate('/contact')}>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default About;
