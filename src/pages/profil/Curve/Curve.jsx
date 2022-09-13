import React, { PureComponent, useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
  PieChart,
  Pie,
  Cell
} from 'recharts';

import './Curve.css';
import { CustomTooltipCursor } from './CustomCursor';
import { CustomTooltip } from './CustomTooltip';

const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function Curve({ id }) {
  const [data, setData] = useState([]);
  const [coordinate, setCoordinate] = useState(0);
  const TitleCurve = () => {
    return (
      <div>
        <p style={{ backgroundColor: '#ffffff', padding: '2px 5px' }}>coucou</p>
      </div>
    );
  };

  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}/average-sessions`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log(data);
        setData(data);
      })
      .catch(function (err) {
        console.log(err, 'error');
      });
  }, [id, setData]);

  if (data.data === undefined || data.data === null) {
    return;
  }

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  data.data.sessions.map((elt, index) => {
    elt.day = days[index];
    return elt;
  });

  return (
    <div className={'Curve'} style={{ width: '100%', height: '100%' }}>
      <div>
        <h2 className={'Curve-title'}>Durée moyenne des sessions</h2>
      </div>

      <ResponsiveContainer
        style={{ backgroundss: 'green' }}
        className={'Curve'}
        width="100%"
        height="100%">
        <LineChart
          width={500}
          height={300}
          margin={{ top: 80, right: 5, bottom: 5, left: 5 }}
          data={data.data.sessions}>
          <defs>
            {/** https://github.com/recharts/recharts/issues/407 */}
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

export default Curve;
