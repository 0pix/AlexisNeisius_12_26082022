import React from 'react';
import './ScoreShart.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * Component that build the user's Board score of objectif
 * @param { number } 50
 * @return { ScoreShart }
 */

/**
 * Component  builds the user's Board objectif
 *
 * @param value number as value as the percentage of the objectif
 *
 * @return ScoreShart
 * @author Alexis.N
 * @version 1.0
 */

function ScoreShart({ value }) {
  const COLORS = ['#e0e0e0', '#ff0000'];
  const baseValue = 100 - value;

  const data = [
    { name: 'Group A', value: baseValue },
    { name: 'Group B', value: value }
  ];

  return (
    <div className={'PieChart'} style={{ width: '100%', height: '100%' }}>
      <div className={'PieChart-text'}>
        <span>{`${value}%`}</span>
        <span>de votre objectif</span>
      </div>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            startAngle={90}
            endAngle={-270}
            innerRadius={70}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value">
            {data.map((entry, index) => (
              <Cell
                className={'test-radius'}
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreShart;
