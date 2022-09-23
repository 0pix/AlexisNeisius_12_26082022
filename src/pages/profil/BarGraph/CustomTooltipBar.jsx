import React from 'react';
import './CustomTooltipBar.css';

/**
 * Component which builds the custom tooltip of the user's Board score of the activity
 *
 * @param active Boolean, If set true, the tooltip is displayed. If set false, the tooltip is hidden, usually calculated internally.
 * @param payload Array, The source data of the content to be displayed in the tooltip, usually calculated internally.
 *
 * @return CustomizedLegendBar
 * @author Alexis.N
 * @version 1.0
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
