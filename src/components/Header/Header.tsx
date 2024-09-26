import "./header.css";
import "/src/App.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="rt">
      <header className="header">
        <div className="shum">
          <div className="header__container">
            <a href="/" className="Logof">
              DAMIEN
            </a>
            <button className="burger-menu" onClick={toggleMenu}>
              <img src="/src/assets/images/burger.svg" alt="" />
            </button>
            <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
              <ul className="list__header">
                <li className="list__item">
                  <a href="/">Home</a>
                </li>
                <li className="list__item">
                  <a href="/">About Me</a>
                </li>
                <li className="list__item">
                  <a href="/">Portfolio</a>
                </li>
                <li className="list__item">
                  <a href="/">Services</a>
                </li>
              </ul>
              <div className="href__contact__me">
                <a href="/" className="contact__me__ahol">
                  Contact Me
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
