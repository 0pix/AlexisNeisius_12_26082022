import React from 'react';
import './CustomTooltipBar.css';

/**
 * Component that build the tooltip for BarGraph
 * @param { number } idUrl.id
 * @return { BarGraph }
 */

export const CustomTooltipBar = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={'CustomTooltipBar'}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};
