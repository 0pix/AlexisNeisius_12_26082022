import { useParams } from 'react-router-dom';
import fire from '../../assets/FoodGraphIcons/fire.svg';
import chicken from '../../assets/FoodGraphIcons/chicken.svg';
import apple from '../../assets/FoodGraphIcons/apple.svg';
import burger from '../../assets/FoodGraphIcons/burger.svg';
import { FoodGraph } from './FoodGraph/FoodGraph';
import ScoreGraph from './ScoreGraph/ScoreGraph';
import RadarGraph from './RadarGraph/RadarGraph';
import BarGraph from './BarGraph/BarGraph';
import CurveGraph from './CurveGraph/CurveGraph';
import './Profil.css';
import { useFetch } from '../../hooks/useFetch';
import { SelectUser } from './SelectUser/SelectUser';

const Profil = () => {
  const idUrl = useParams();
  const { data: dataUser } = useFetch(`http://localhost:3000/user/${idUrl.id}/`); //data user (id, keyData, todayScore, userInfos)
  const { data: dataActivity } = useFetch(`http://localhost:3000/user/${idUrl.id}/activity`); //BarGraph
  const { data: dataPerformance } = useFetch(`http://localhost:3000/user/${idUrl.id}/performance`); //RadarGraph
  const { data: dataAverageSessions } = useFetch(
    `http://localhost:3000/user/${idUrl.id}/average-sessions`
  ); //CurveGraph

  if (dataUser === undefined || dataUser === null) {
    return <SelectUser />;
  }

  return (
    <div className={'Home'}>
      <div className={'Home-header'}>
        <h1>
          Bonjour
          <span className={'Home-firstName'}>{' ' + dataUser.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className={'Home-content'}>
        <div className={'div1'}>
          <BarGraph data={dataActivity} />
        </div>

        <div className={'div2'}>
          <FoodGraph
            data={dataUser.keyData.calorieCount}
            img={fire}
            category={'Calories'}
            bgColor={'rgba(255,0,0,0.09)'}
          />

          <FoodGraph
            data={dataUser.keyData.proteinCount}
            img={chicken}
            category={'Proteines'}
            bgColor={'rgba(73,183,253,0.09)'}
          />

          <FoodGraph
            data={dataUser.keyData.carbohydrateCount}
            img={apple}
            category={'Glucides'}
            bgColor={'rgba(255,209,0,0.15)'}
          />

          <FoodGraph
            data={dataUser.keyData.lipidCount}
            img={burger}
            category={'Lipides'}
            bgColor={'rgba(253,81,129,0.15)'}
          />
        </div>

        <div className={'div3'}>
          <CurveGraph data={dataAverageSessions} />
        </div>

        <div className={'div4'}>
          <RadarGraph data={dataPerformance} />
        </div>

        <div className={'div5'}>
          <ScoreGraph value={dataUser.todayScore || dataUser.score} />
        </div>
      </div>
    </div>
  );
};

export default Profil;
