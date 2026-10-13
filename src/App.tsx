
import "./App.css";

// PLACEHOLDER: Replace with the shop's verified WhatsApp number.
const WHATSAPP_NUMBER = "234$$$$$$$$$$";

// Reusable function for creating WhatsApp links.
const createWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WHATSAPP_LINK = createWhatsAppLink(
  "Hello LARRY-CUTZ! I'd like to book a haircut. Please let me know your prices and available appointment times.",
);

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#">
          LARRY<span>-CUTZ</span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
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
                "Hello LARRY-CUTZ! I'd like to book a classic haircut. Please let me know the price and available appointment times.",
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
                "Hello LARRY-CUTZ! I'd like to book a fade haircut. Please let me know the price and available appointment times.",
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
                "Hello LARRY-CUTZ! I'd like to book beard grooming. Please let me know the price and available appointment times.",
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
          <p className="eyebrow">THE LARRY-CUTZ EXPERIENCE</p>
          <h2>Your style deserves attention.</h2>
          <p>
            From classic cuts to fresh fades, discover a style that suits you.
            Explore our services and get in touch to ask about your next
            haircut.
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

      {/* Footer section starts here */}
      <footer className="footer">
        <a className="brand" href="#">
          LARRY<span>-CUTZ</span>
        </a>

        <p>Sharp cuts. Fresh confidence.</p>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="back-to-top" href="#">
          Back to top ↑
        </a>

        <p className="footer-copy">
          © {new Date().getFullYear()} LARRY-CUTZ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
