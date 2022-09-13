import { Rectangle } from 'recharts';
import React from 'react';

export const CustomTooltipCursor = ({ coordinate }) => {
  const { x } = coordinate;
  return <Rectangle fill="rgba(0, 0, 0, 0.1)" x={x} width={x + 400} height={300} />;
};
