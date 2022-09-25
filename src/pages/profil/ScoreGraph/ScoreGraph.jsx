import React from 'react';
import './ScoreGraph.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * Component  builds the user's Board objectif
 *
 * @param value  number, as value of the percentage objectif (dataUser)
 *
 * @return ScoreGraph
 * @author Alexis.N
 * @version 1.0
 */

function ScoreGraph({ value }) {
  // console.log(value);
  const COLORS = ['#e0e0e0', '#ff0000'];
  const valuePercentage = value * 100;
  const baseValue = 100 - valuePercentage;

  const data = [
    { name: 'Group A', value: baseValue },
    { name: 'Group B', value: valuePercentage }
  ];

  return (
    <div className={'PieChart'} style={{ width: '100%', height: '100%' }}>
      <div className={'PieChart-text'}>
        <span>{`${valuePercentage}%`}</span>
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

export default ScoreGraph;
