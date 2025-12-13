import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-dark py-5 mt-5">
      <div className="container">

        <div className="row">

          <div className="col-md-4 mb-4">
            <h4 className="footer-brand">Aurelio Motors</h4>
            <p className="footer-text">Driving the future of electric mobility.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/models">Models</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/enquire">Enquire</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="footer-title">Legal</h6>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom text-center pt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Aurelio Motors. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
