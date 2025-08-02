import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Contact.scss';
import { Link } from 'react-router-dom';

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inquiries = [
    'General inquiry',
    'App support request',
    'Business collaboration',
    'Other',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      return MySwal.fire({
        icon: 'warning',
        title: 'Incomplete',
        text: 'Please fill all required fields.',
      });
    }

    await MySwal.fire({
      icon: 'success',
      title: 'Thanks, we got it!',
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Inquiry:</strong> ${formData.inquiry}</p>
        <p><strong>Message:</strong><br>${formData.message.replace(
          /\n/g,
          '<br>',
        )}</p>
      `,
      confirmButtonText: 'Okay',
    });

    setFormData({ name: '', email: '', inquiry: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="hero section">
        <div className="text-center">
          <h1>Contact Us</h1>
          <p>Got feedback, ideas, or support requests? We’re here.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info section container">
        <div className="info-item">
          <h3>Email Us</h3>
          <a href="mailto:rygen.dev2025@gmail.com">rygen.dev2025@gmail.com</a>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <a href="tel:+918786543210">+91 87865 43210</a>
        </div>
        <div className="info-item">
          <h3>Office</h3>
          <address>
            #12‑B, Pondicherry Tech Park<br />
            Lawspet, Puducherry – 605008
          </address>
          <small>Working hours: Mon–Fri, 10 AM–6 PM (IST)</small>
          <small>We typically respond within 24 hours.</small>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form section container">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Your Name<span>*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              placeholder="e.g. Priya Sharma"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>
              Your Email<span>*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              placeholder="e.g. priya@example.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Inquiry Type</label>
            <select
              value={formData.inquiry}
              onChange={(e) =>
                setFormData({ ...formData, inquiry: e.target.value })
              }
            >
              <option value="">Select one...</option>
              {inquiries.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>
              Your Message<span>*</span>
            </label>
            <textarea
              value={formData.message}
              placeholder="Let us know how we can assist you."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows="4"
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </section>

      {/* Map Embed */}
      <section className="map section container">
        <h2>Find Us Here</h2>
        <iframe
          title="RYGEN Office Location"
          src="https://maps.google.com/maps?q=Pondicherry%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="280"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>

      {/* Social + FAQ */}
      <section className="extra section container">
        <h2>Other Ways to Connect</h2>
        <div className="extras-grid">
          <div className="socials">
           <button
            type="button"
            className="social-link"
            onClick={() => window.open('https://x.com/RYGEN_DEV', '_blank')}
            aria-label="Twitter"
          >
            🐦 Twitter
          </button>
                      <a
            className="social-anchor"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
            <a href="https://github.com/collections/github-pages-examples" target='_blank' rel="noreferrer" aria-label="GitHub">
              💻 GitHub
            </a>
          </div>
          <div className="link-to-faq">
            <Link to="/faq" className="faq-link">
  See our FAQ
</Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
