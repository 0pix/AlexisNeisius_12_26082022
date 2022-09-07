import React, { useEffect, useState } from 'react';
import './RadarGraph.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data1 = [
  {
    subject: 'Math',
    A: 120
    // B: 110,
    // fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98
    // B: 130,
    // fullMark: 150,
  },
  {
    subject: 'English',
    A: 86
    // B: 130,
    // fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99
    // B: 100,
    // fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85
    // B: 90,
    // fullMark: 150,
  },
  {
    subject: 'History',
    A: 65
    // B: 85,
    // fullMark: 150,
  }
];

function RadarGraph({ id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}/performance`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log(data);
        setData(data);
      })
      .catch(function (err) {
        console.log(err, ' error');
      });
  }, [id, setData]);

  if (data.data === undefined || data.data === null) {
    return;
  }

  // Sartox : for (const [i, value] of data.entries()

  for (let x = 0; x < data.data.data.length; x++) {
    data.data.data[x].kind = data.data.kind[x + 1];
  }

  // console.log(data.data);

  return (
    <ResponsiveContainer className={'RadarGraph'} width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data.data}>
        <PolarGrid />
        <PolarAngleAxis className={'RadarGraph'} dataKey="kind" />
        <Radar name="Mike" dataKey="value" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarGraph;
