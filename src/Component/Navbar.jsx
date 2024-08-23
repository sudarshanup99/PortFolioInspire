import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl bg-info-subtle">
      <div className="container-fluid p-2">
        <a
          className="navbar-brand px-3 fw-bold text-uppercase fs-3 ml-3"
          href="#"
        >
         <h3>Sudarshan</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link fw-semibold px-3" href="#">
              Home
            </a>
            <Link
              to="work"
              spy={true}
              offset={-100}
              duration={100}
              className="nav-link fw-semibold px-3"
            >
              Work
            </Link>
            <Link
              to="skill"
              spy={true}
              offset={-100}
              duration={100}
              className="nav-link fw-semibold px-3"
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              offset={-100}
              duration={100}
              className="nav-link fw-semibold px-3"
            >
              Project
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-100}
              duration={100}
              className="nav-link fw-semibold px-3"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
