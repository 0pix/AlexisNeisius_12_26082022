import React from 'react';
import './IconMenu.css';

function Icon({ img }) {
  return (
    <a className={'IconMenu'}>
      <img src={img} alt={'icon'} />
    </a>
  );
}

export default Icon;
