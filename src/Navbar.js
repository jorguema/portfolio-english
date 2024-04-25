import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    console.log(location.pathname);
    setPathName(location.pathname);

    debugger;
    if (document.body.classList.contains('mobile-nav-active')) {
      document.body.classList.remove('mobile-nav-active')
      let navbarToggle = document.getElementsByClassName('mobile-nav-toggle')[0];
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')
    }
  }, [location]);
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">

          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Sonia Soto</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><Link to="/" className={(pathName === '/' ? 'active' : '')}><i className="bx bx-home"></i> <span>Home</span></Link></li>
              <li><Link to="/about" className={(pathName === '/about' ? 'active' : '')}><i className="bx bx-home"></i> <span>About</span></Link></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;