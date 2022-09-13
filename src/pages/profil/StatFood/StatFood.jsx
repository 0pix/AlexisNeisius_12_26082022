import React from 'react';
import './StatFood.css';

/**
 * Component that build the user's Board score of stat food
 *
 * @param data number of the statistics
 * @param img svg about statistics
 * @param bgColor color for the icon
 * @param category string to know what extension return
 *
 * @return StatFood
 * @author Alexis.N
 * @version 1.0
 */

export const StatFood = ({ data, img, bgColor, category }) => {
  return (
    <div className={'StatFood'}>
      <div style={{ backgroundColor: bgColor }} className={'StatFood-img'}>
        <img src={img} alt={`icon-${category}`} />
      </div>
      <div className={'StatFood-text'}>
        <span className={'StatFood-number'}>
          {data}
          {category === 'Calories' ? 'kCal' : 'g'}
        </span>
        <span className={'StatFood-category'}>{category}</span>
      </div>
    </div>
  );
};
