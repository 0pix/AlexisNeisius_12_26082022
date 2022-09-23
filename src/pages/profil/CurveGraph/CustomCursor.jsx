import { Rectangle } from 'recharts';
import React from 'react';

/**
 * Component builds the custom cursor of the user's Board average-sessions (the curve)
 *
 * @param coordinate is an object with the position of the tooltip
 *
 * @return CustomTooltipCursor
 * @author Alexis.N
 * @version 1.0
 */

export const CustomTooltipCursor = ({ coordinate }) => {
  const { x } = coordinate;
  return <Rectangle fill="rgba(0, 0, 0, 0.1)" x={x} width={x + 400} height={300} />;
};
