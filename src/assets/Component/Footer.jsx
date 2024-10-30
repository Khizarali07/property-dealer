import { useLocation } from "react-router-dom";
import "../CSS/Footer.css";

function Footer() {
  const location = useLocation();

  // Determine if the current route is /login or /register
  const isLoginOrRegister =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <div
        className={`footer ${isLoginOrRegister ? "footer-login-register" : ""}`}
      >
        <div className="footer-container">
          <div className="sideOne">
            <div className="text-cont">
              <div className="footer-image">
                <img
                  src={`${
                    isLoginOrRegister ? "/groupLogo1.svg" : "/GroupLogo.svg"
                  }`}
                  alt="Logo"
                  className="img2"
                />
              </div>
              <div className={`${isLoginOrRegister ? "text-black" : "ftext"}`}>
                Neighborwho.com helps you find properties and learn more about
                them.
              </div>
              <a href="#" className="phone">
                <img
                  src={`${
                    isLoginOrRegister ? "locationBlack.svg" : "location.svg"
                  }`}
                  alt="location"
                  className="location"
                />
                <span
                  className={`number ${
                    isLoginOrRegister ? "text-black" : "text-white"
                  }`}
                >
                  1-866-202-7417
                </span>
              </a>
            </div>
            <div className="social">
              <div className="social1">
                <div className="facebook">
                  <img src="/facebook.svg" alt="facebook" className="fb" />
                </div>
              </div>

              <div className="social1">
                <div className="facebook">
                  <img src="/twitter.svg" alt="facebook" className="fb" />
                </div>
              </div>

              <div className="social1">
                <div className="facebook">
                  <img src="/insta.svg" alt="facebook" className="fb" />
                </div>
              </div>
            </div>
          </div>
          <div className="sideTwo flex flex-row gap-20">
            <nav
              className={`quick-links ${
                isLoginOrRegister ? "text-black" : "text-white"
              }`}
            >
              <h2 className="quick-links-title">Quick Links</h2>
              <ul className="quick-links-list">
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    About Us
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Resources
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Contact Us
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Log In
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className={`quick-links-two ${
                isLoginOrRegister ? "text-black" : "text-white"
              }`}
            >
              <h2 className="quick-links-title">Help</h2>
              <ul className="quick-links-list">
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Support
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    {`Do's & Don'ts`}
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Street Address Directory
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Listings for Sale
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Real Estate Market Trends
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Do Not Sell My Personal Information
                  </a>
                </li>
                <li className="quick-links-item">
                  <a
                    href="#"
                    className={`quick-links-link ${
                      isLoginOrRegister ? "text-black" : "text-white"
                    }`}
                  >
                    Affiliates
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
