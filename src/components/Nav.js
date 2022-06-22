import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h2 className="header-title">
        FUD<span className="red">Frog</span>Force
      </h2>
      <nav className={isOpen ? "header-nav open" : "header-nav"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              rel="noreferrer"
              target={"_blank"}
              className="twitter-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>

        <span className="close" onClick={() => setIsOpen(false)}>
          &times;
        </span>
      </nav>

      <i
        className="fas fa-bars fa-2x toggler"
        onClick={() => setIsOpen(true)}
      ></i>
    </header>
  );
};

export default Nav;
