import "../styles/about.css";

export default function About() {
  return (
    <div className="about-section container py-5">
      <h2 className="about-title text-center">About Aurelio Motors</h2>

      <p className="about-lead text-center">
        Aurelio Motors is dedicated to shaping the future of electric mobility.
      </p>

      <div className="about-block">
        <h4 className="about-heading">Innovation & Technology</h4>
        <p className="about-text">
          We use advanced battery systems, AI-powered safety features, and smart eco-design.
        </p>
      </div>

      <section className="about-row">
        <div className="about-image-col">
          <img
            src="/about1.png"
            alt="Aurelio Motors Showroom"
            className="about-image"
          />
        </div>

        <div className="about-content-col">
          <h3 className="about-subtitle">Our Showroom</h3>
          <p className="about-description">
            A sleek, modern showroom with futuristic architecture and elegant Aurelio EVs on display.
          </p>
        </div>
      </section>

      <section className="about-row reverse">
        <div className="about-image-col">
          <img
            src="/about2.png"
            alt="Aurelio Motors Manufacturing Unit"
            className="about-image"
          />
        </div>

        <div className="about-content-col">
          <h3 className="about-subtitle">Our Manufacturing Unit</h3>
          <p className="about-description">
            A state-of-the-art, sustainable manufacturing facility with advanced robotics and eco-friendly practices.
          </p>
        </div>
      </section>
    </div>
  );
}
