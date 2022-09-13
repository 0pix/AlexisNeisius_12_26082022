import React from 'react';

export const CustomTooltip = ({ active, payload, coordinate, setCoordinate }) => {
  if (active && payload && payload.length) {
    setCoordinate(coordinate);
    return (
      <div>
        <p
          style={{
            backgroundColor: '#ffffff',
            padding: '2px 5px',
            outline: 'none'
          }}>{`${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
