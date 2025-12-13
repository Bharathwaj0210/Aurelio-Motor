import { Link } from "react-router-dom";
import "../styles/navbar.css"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <Link className="navbar-brand fw-bold" to="/">
        Aurelio Motors
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/models">Models</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item">
            <Link className="nav-link btn btn-brand text-white px-3 ms-2" to="/enquire">
              Enquire
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
