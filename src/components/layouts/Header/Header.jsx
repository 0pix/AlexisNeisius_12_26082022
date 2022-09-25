import React from 'react';
import './Header.css';
import logo from '../../../assets/logoSportSee.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname;
  return (
    <header className="Header">
      <img src={logo} width={'140px'} alt={'logo'} />
      <nav>
        <ul>
          <li>
            <a href="src/components/layouts/Header/Header#">Accueil</a>
          </li>
          <li>
            <Link className={location === '/profil' ? 'inlinText' : ''} to="/profil">
              Profil
            </Link>
            {/*<a href="src/components/layouts/Header/Header#">Profil</a>*/}
          </li>
          <li>
            <a href="src/components/layouts/Header/Header#">Réglage</a>
          </li>
          <li>
            <a href="src/components/layouts/Header/Header#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
