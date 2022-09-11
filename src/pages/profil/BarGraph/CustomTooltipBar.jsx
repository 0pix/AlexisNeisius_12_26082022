import React from 'react';
import './CustomTooltipBar.css';

export const CustomTooltipBar = ({ active, payload, coordinate, setCoordinate }) => {
  if (active && payload && payload.length) {
    setCoordinate(coordinate);
    return (
      <div className={'CustomTooltipBar'}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};
