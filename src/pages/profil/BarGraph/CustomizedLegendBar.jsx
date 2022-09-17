import './CustomizedLegendBar.css';
import React from 'react';

export const CustomizedLegendBar = (props) => {
  return (
    <div className="Legend">
      <div className={'Legend-title'}>
        <h2>Activité quotidienne</h2>
      </div>
      <div className={'Legend-items'}>
        <div className="Legend__item">
          <div className="Legend__circle Legend__circle--black"></div>
          <span>Poids (kg)</span>
        </div>
        <div className="Legend__item">
          <div className="Legend__circle"></div>
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
    </div>
  );
};
