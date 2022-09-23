import './CustomizedLegendBar.css';
import React from 'react';

/**
 * Component which builds the custom legend of the user's Board score of the activity
 *
 * @param none
 *
 * @return CustomizedLegendBar
 * @author Alexis.N
 * @version 1.0
 */

export const CustomizedLegendBar = () => {
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
