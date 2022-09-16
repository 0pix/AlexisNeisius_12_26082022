import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import './CurveGraph.css';
import { CustomTooltipCursor } from './CustomCursor';
import { CustomTooltip } from './CustomTooltip';

/**
 * Component  builds the user's Board average-sessions (the curve)
 *
 * @param data data from the user profil (averageSessions)
 *
 * @return CurveGraph
 * @author Alexis.N
 * @version 1.0
 */

function CurveGraph({ data }) {
  const [coordinate, setCoordinate] = useState(0);

  if (data === undefined || data === null) {
    return;
  }

  const dayToIndex = (tabler) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    tabler.map((elt, index) => {
      elt.day = days[index];
      return elt;
    });
  };
  dayToIndex(data.sessions);

  return (
    <div className={'CurveGraph'} style={{ width: '100%', height: '100%' }}>
      <div>
        <h2 className={'CurveGraph-title'}>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer className={'CurveGraph'} width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          margin={{ top: 80, right: 5, bottom: 5, left: 5 }}
          data={data.sessions}>
          {/** gradient for the svg curve */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.33)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.66)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <Line
            stroke="url(#gradient)"
            strokeWidth={2}
            type="natural"
            dot={false}
            dataKey="sessionLength"
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.25)',
              r: 5,
              fill: '#fff'
            }}
          />
          <Tooltip
            content={<CustomTooltip setCoordinate={setCoordinate} />}
            cursor={<CustomTooltipCursor coordinate={coordinate} />}
          />
          <YAxis hide={true} domain={['dataMin - 10', 'dataMax']}></YAxis>
          <XAxis
            style={{ position: 'absolute' }}
            tick={{ fontSize: 12, fontWeight: 500 }}
            height={30}
            padding={{ left: 20, right: 20 }}
            dataKey="day"
            axisLine={false}
            tickLine={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CurveGraph;
