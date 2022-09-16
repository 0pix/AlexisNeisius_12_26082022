import { Link } from 'react-router-dom';
import React from 'react';
import './SelectUser.css';

export const SelectUser = () => {
  return (
    <div className={'SelectUser'}>
      <nav>
        <h2>Choisissez un profil d'utilisateur </h2>
        <ul>
          <li>
            <Link to="/profil/12">User 12</Link>
          </li>
          <li>
            <Link to="/profil/18">User 18</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
