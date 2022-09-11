import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from 'recharts';
import './BarGraph.css';
import * as PropTypes from 'prop-types';
import { CustomTooltipBar } from './CustomTooltipBar';

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
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function BarGraph({ id }) {
  const [coordinate, setCoordinate] = useState(0);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}/activity`)
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

  data.data.sessions.map((elt, index) => {
    elt.day = index;
    return elt;
  });

  // console.log(data.data.sessions);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data.data.sessions}>
        <Legend iconSize={10} iconType={'circle'} position="insideBottom" verticalAlign="top" />
        <CartesianGrid className={'CartesianGrid'} strokeDasharray="3 3" />
        <XAxis dataKey="day" tickLine={false} />
        <YAxis orientation={'right'} axisLine={false} tickLine={false} />
        <Tooltip className={Tooltip} content={<CustomTooltipBar setCoordinate={setCoordinate} />} />
        <Bar dataKey="kilogram" radius={[10, 10, 0, 0]} maxBarSize={8} fill="#282D30" />
        <Bar dataKey="calories" radius={[10, 10, 0, 0]} maxBarSize={8} fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;
