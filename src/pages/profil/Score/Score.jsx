import React from 'react';
import './Score.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const value = 30;
const baseValue = 100 - value;

const data = [
  { name: 'Group A', value: baseValue },
  { name: 'Group B', value: value }
];
const COLORS = ['#e0e0e0', '#ff0000'];

function Score() {
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
            // cx={420}
            // cy={200}
            startAngle={90}
            endAngle={-270}
            innerRadius={70}
            outerRadius={80}
            // fill="#8884d8"
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

export default Score;
