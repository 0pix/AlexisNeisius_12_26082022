import React from 'react';
import './FoodGraph.css';

/**
 * Component which build the user's Board score of stat food
 *
 * @param data object, with data from the user profil (dataAverageSessions)
 * @param img svg, about statistics
 * @param bgColor color, for the icon
 * @param category string, to know what extension return
 *
 * @return FoodGraph
 * @author Alexis.N
 * @version 1.0
 */

export const FoodGraph = ({ data, img, bgColor, category }) => {
  return (
    <div className={'FoodGraph'}>
      <div style={{ backgroundColor: bgColor }} className={'FoodGraph-img'}>
        <img src={img} alt={`icon-${category}`} />
      </div>
      <div className={'FoodGraph-text'}>
        <span className={'FoodGraph-number'}>
          {data}
          {category === 'Calories' ? 'kCal' : 'g'}
        </span>
        <span className={'FoodGraph-category'}>{category}</span>
      </div>
    </div>
  );
};
