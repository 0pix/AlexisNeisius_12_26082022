import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} width={"140px"} alt={"logo"} />
      <nav>
        <ul>
          <li>
            <a href="#">clic</a>
          </li>
          <li>
            <a href="#">clic</a>
          </li>
          <li>
            <a href="#">clic</a>
          </li>
          <li>
            <a href="#">clic</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
