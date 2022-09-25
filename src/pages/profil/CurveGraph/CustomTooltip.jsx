import React from 'react';

/**
 * Component builds the custom tooltip of the user's Board average-sessions (the curve)
 *
 * @param active Boolean, If set true, the tooltip is displayed. If set false, the tooltip is hidden, usually calculated internally.
 * @param payload Array, The source data of the content to be displayed in the tooltip, usually calculated internally.
 * @param setCoordinate function, to set the coordinate of the cursor
 * @param coordinate object, to get the coordinate of tooltip position, usually calculated internally.
 *
 * @return CustomTooltip
 * @author Alexis.N
 * @version 1.0
 */

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
