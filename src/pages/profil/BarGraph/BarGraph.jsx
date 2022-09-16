import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './BarGraph.css';
import { CustomTooltipBar } from './CustomTooltipBar';
import { CustomizedLegendBar } from './CustomizedLegendBar';

/**
 * Component which builds the user's Board score of the activity
 *
 * @param id number as id from current user
 *
 * @return BarGraph
 * @author Alexis.N
 * @version 1.0
 */

function BarGraph({ data }) {
  if (data === undefined || data === null) {
    return;
  }

  const dayToIndex = (tabler) => {
    tabler.map((elt, index) => {
      elt.day = index;
      return elt;
    });
  };
  dayToIndex(data.data.sessions);

  return (
    <div className={'BarGraph'}>
      <div className={'BarGraph-legend'}>
        <h2>Activité quotidienne</h2>
      </div>
      <ResponsiveContainer height={250} className={'BarGraph-container'}>
        <BarChart data={data.data.sessions}>
          <Legend content={<CustomizedLegendBar />} />
          <CartesianGrid className={'CartesianGrid'} opacity={0.3} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis yAxisId={0} orientation={'right'} axisLine={false} tickLine={false} />
          <YAxis yAxisId={1} hide={true} orientation={'right'} axisLine={false} tickLine={false} />
          <Tooltip className={Tooltip} content={<CustomTooltipBar />} />
          <Bar
            yAxisId={0}
            dataKey="kilogram"
            radius={[10, 10, 0, 0]}
            maxBarSize={8}
            fill="#282D30"
          />
          <Bar
            yAxisId={1}
            dataKey="calories"
            radius={[10, 10, 0, 0]}
            maxBarSize={8}
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarGraph;
