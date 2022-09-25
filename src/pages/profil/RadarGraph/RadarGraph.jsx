import './RadarGraph.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Component  builds the user's Board performance (radar)
 *
 * @param data object, with data from the user profil (dataPerformance)
 *
 * @return RadarGraph
 * @author Alexis.N
 * @version 1.0
 */

function RadarGraph({ data }) {
  if (data === undefined || data === null) {
    return;
  }

  const categories = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'];
  const refactoData = () => {
    for (let x = 0; x < data.data.length; x++) {
      data.data[x].kind = categories[x];
    }
  };
  refactoData();

  return (
    <ResponsiveContainer className={'RadarGraph'} width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data.reverse()}>
        {/*radialLines introuvable sur la doc de recharts*/}
        <PolarGrid radialLines={false} />
        <PolarAngleAxis className={'RadarGraph'} dataKey="kind" />
        <Radar name="Mike" dataKey="value" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarGraph;
