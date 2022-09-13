import React, { useEffect, useState } from 'react';
import './RadarGraph.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Component that build the user's Board performance (radar)
 * @param { number } idUrl.id
 * @return { RadarGraph }
 */

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
  const indexToName = () => {
    for (let x = 0; x < data.data.data.length; x++) {
      data.data.data[x].kind = data.data.kind[x + 1];
    }
  };
  indexToName();

  return (
    <ResponsiveContainer className={'RadarGraph'} width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data.data}>
        {/*radialLines introuvable sur la doc de recharts*/}
        <PolarGrid radialLines={false} />
        <PolarAngleAxis className={'RadarGraph'} dataKey="kind" />
        <Radar name="Mike" dataKey="value" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarGraph;
