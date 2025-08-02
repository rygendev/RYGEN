import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Home.scss';

const MySwal = withReactContent(Swal);

function Home() {
  const navigate = useNavigate();

  const handleSubscribe = async () => {
    const { value: formValues } = await MySwal.fire({
      title: 'Subscribe Now',
      html:
        '<input id="swal-name" class="swal2-input" placeholder="Your Name">' +
        '<input id="swal-email" class="swal2-input" placeholder="Your Email">',
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-name').value;
        const email = document.getElementById('swal-email').value;
        if (!name || !email) {
          Swal.showValidationMessage('Please enter both name and email');
          return false;
        }
        return { name, email };
      },
    });

    if (formValues) {
      Swal.fire(
        'Subscribed!',
        `Thank you ${formValues.name}, we’ll keep you posted at ${formValues.email}.`,
        'success'
      );
    }
  };

  return (
    <div className="home-page">
      <div className="overlay">

        {/* Hero */}
        <section className="hero">
          <h1>Welcome to <span className="brand">RYGEN</span></h1>
          <p>We build powerful and innovative mobile applications tailored for everyday needs.</p>
          <button className="cta-button" onClick={() => navigate('/apps')}>Explore Our Apps</button>
        </section>

        {/* What We Do */}
        <section className="what-we-do">
          <h2>What We Do</h2>
          <p>At RYGEN, we craft Android apps that simplify your daily life.</p>
          <div className="highlights">
            <div className="highlight">
              <h3>📱 App Development</h3>
              <p>From concept to deployment, we deliver impactful apps.</p>
            </div>
            <div className="highlight">
              <h3>🔧 Continuous Updates</h3>
              <p>We constantly improve and add features based on your feedback.</p>
            </div>
            <div className="highlight">
              <h3>🤝 Client-Centric</h3>
              <p>Our apps focus on usability and real-world value.</p>
            </div>
          </div>
        </section>

        {/* Apps Preview */}
        <section className="apps-preview">
          <h2>Featured Applications</h2>
          <div className="app-cards">
            <div className="card">
              <h3>Health Tracker</h3>
              <p>Track your fitness goals and monitor your vitals daily.</p>
            </div>
            <div className="card">
              <h3>Task Manager</h3>
              <p>Boost your productivity with advanced task planning tools.</p>
            </div>
            <div className="card">
              <h3>Finance Buddy</h3>
              <p>Manage your money, expenses, and budgets effectively.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <h2>Why Choose RYGEN?</h2>
          <ul>
            <li>🚀 Modern UI/UX & Fast Performance</li>
            <li>🔒 Secure Data Handling</li>
            <li>📱 Built Specifically for Android</li>
            <li>💬 Responsive Support Team</li>
          </ul>
        </section>

        {/* Testimonials Carousel */}

        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div id="carouselTestimonials" className="carousel slide carousel-dark" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active" data-bs-interval="5000">
                <div className="testimonial">
                  <img src="https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg" alt="User 1" />
                  <p>"Health Tracker helped me stay on top of my fitness routine. Love it!"</p>
                  <span>- Priya, Mumbai</span>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="5000">
                <div className="testimonial">
                  <img src="https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg" alt="User 2" />
                  <p>"Task Manager is the reason I never forget deadlines anymore."</p>
                  <span>- Arun, Chennai</span>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="5000">
                <div className="testimonial">
                  <img src="https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg" alt="User 3" />
                  <p>"Finance Buddy gave me full control over my monthly budget."</p>
                  <span>- Sneha, Bangalore</span>
                </div>
              </div>

            </div>

            {/* Optional controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>


        {/* Call to Action */}
        <section className="cta-section">
          <h2>Stay Ahead with RYGEN</h2>
          <p>Subscribe now to get early access to updates and new releases.</p>
          <button className="cta-button" onClick={handleSubscribe}>Subscribe Now</button>
        </section>

        {/* Contact Preview */}
        <section className="contact-preview">
          <h2>Let's Connect</h2>
          <p>Have a question or want to collaborate? Reach out to us.</p>
          <button className="cta-button" onClick={() => navigate('/contact')}>Contact Us</button>
        </section>

      </div>
    </div>
  );
}

export default Home;
