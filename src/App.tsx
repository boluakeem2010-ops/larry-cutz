import { useState } from "react";

import "./App.css";

// PLACEHOLDER: Replace with the shop's verified WhatsApp number.

const WHATSAPP_NUMBER = "234$$$$$$$$$$";

const createWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WHATSAPP_LINK = createWhatsAppLink(
  "Hello DON-WIZZY! I'd like to book a haircut. Please let me know your prices and available appointment times.",
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#" onClick={() => setMenuOpen(false)}>
          DON<span>-WIZZY</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? "menu-open" : ""}`}
        >
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <a
          className="nav-button"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">YOUR STYLE. YOUR CONFIDENCE.</p>

            <h1>
              A fresh cut.
              <br />A fresh start.
            </h1>

            <p className="hero-text">
              Great style starts with the right barber. Visit us for a clean,
              confident look.
            </p>

            <a
              className="primary-button"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact the shop
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85"
              alt="Barber tools arranged on a work surface"
            />
          </div>
        </section>

        <section className="services" id="services">
          <p className="eyebrow">WHAT WE DO</p>

          <h2>Keep your look sharp.</h2>

          <div className="service-grid">
            <a
              className="service-card"
              href={createWhatsAppLink(
                "Hello DON-WIZZY! I'd like to book a classic haircut. Please let me know the price and available appointment times.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>01 / HAIRCUT</span>

              <h3>Classic Haircut</h3>

              <p>A clean, timeless cut tailored to your style.</p>

              <div className="service-bottom">
                <span>Price on request</span>

                <span className="service-arrow">↗</span>
              </div>
            </a>

            <a
              className="service-card"
              href={createWhatsAppLink(
                "Hello DON-WIZZY! I'd like to book a fade haircut. Please let me know the price and available appointment times.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>02 / FADE</span>

              <h3>Fade Haircut</h3>

              <p>A smooth fade with sharp, clean finishing.</p>

              <div className="service-bottom">
                <span>Price on request</span>

                <span className="service-arrow">↗</span>
              </div>
            </a>

            <a
              className="service-card"
              href={createWhatsAppLink(
                "Hello DON-WIZZY! I'd like to book beard grooming. Please let me know the price and available appointment times.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>03 / GROOMING</span>

              <h3>Beard Grooming</h3>

              <p>Keep your beard neat, shaped and well-groomed.</p>

              <div className="service-bottom">
                <span>Price on request</span>

                <span className="service-arrow">↗</span>
              </div>
            </a>
          </div>

          <p className="demo-note">
            Demo services only. Confirm actual services and prices with the
            business before publishing.
          </p>
        </section>

        <section className="gallery" id="gallery">
          <p className="eyebrow">THE LOOK</p>

          <h2>Fresh cuts. Clean finishes.</h2>

          <p className="gallery-intro">
            Explore haircut inspiration and find a style you like.
          </p>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=85"
                alt="Barbershop haircut inspiration"
                loading="lazy"
              />
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=85"
                alt="Barber working on a hairstyle"
                loading="lazy"
              />
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=85"
                alt="Barber styling a haircut"
                loading="lazy"
              />
            </div>
          </div>

          <p className="demo-note">
            Haircut inspiration images only. Replace these with the shop's own
            work before publishing the website.
          </p>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">THE DON-WIZZY EXPERIENCE</p>

          <h2>Your style deserves attention.</h2>

          <p>
            From classic cuts to fresh fades, discover a style that suits you.
            Explore our services and get in touch to ask about your next
            haircut.
          </p>
        </section>

        

        <section className="reviews" id="reviews">
          <p className="eyebrow">THE WORD ON THE STREET</p>

          <h2>Every detail matters.</h2>

          <p className="reviews-intro">
            A great haircut starts with care, skill and attention to detail.
          </p>

          <div className="reviews-grid">
            <article className="review-card">
              <span className="review-mark" aria-hidden="true">
                “
              </span>

              <h3>Clean cuts. Fresh confidence.</h3>

              <p>
                Your next haircut should feel right from the moment you leave
                the chair.
              </p>

              <span className="review-author">THE DON-WIZZY STANDARD</span>
            </article>

            <article className="review-card">
              <span className="review-mark" aria-hidden="true">
                “
              </span>

              <h3>It's all in the details.</h3>

              <p>
                From the finish to the final look, make your personal style the
                priority.
              </p>

              <span className="review-author">OUR APPROACH</span>
            </article>

            <article className="review-card">
              <span className="review-mark" aria-hidden="true">
                “
              </span>

              <h3>Your style, your way.</h3>

              <p>
                Tell the barber what you have in mind and ask about the cut that
                suits you.
              </p>

              <span className="review-author">YOUR NEXT VISIT</span>
            </article>
          </div>

          <p className="demo-note">
            These are sample promotional messages, not customer testimonials.
            Replace them with genuine customer reviews before presenting this
            section as customer feedback.
          </p>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">YOUR NEXT CUT STARTS HERE</p>

          <h2>Ready for a fresh look?</h2>

          <p>
            Have a style in mind? Get in touch to ask about services, prices and
            appointment availability.
          </p>

          <a
            className="primary-button"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with the barber ↗
          </a>

          <p className="contact-note">
            Please confirm appointment availability with the shop.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#">
          DON<span>-WIZZY</span>
        </a>

        <p>Sharp cuts. Fresh confidence.</p>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#services">Services</a>

          <a href="#gallery">Gallery</a>

          <a href="#about">About</a>

          <a href="#reviews">Reviews</a>

          <a href="#contact">Contact</a>
        </nav>

        <a className="back-to-top" href="#">
          Back to top ↑
        </a>

        <p className="footer-copy">
          © {new Date().getFullYear()} DON-WIZZY. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
