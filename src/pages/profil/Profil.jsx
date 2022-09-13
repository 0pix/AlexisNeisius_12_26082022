import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fire from '../../assets/FoodGraphIcons/fire.svg';
import chicken from '../../assets/FoodGraphIcons/chicken.svg';
import apple from '../../assets/FoodGraphIcons/apple.svg';
import burger from '../../assets/FoodGraphIcons/burger.svg';
import { FoodGraph } from './FoodGraph/FoodGraph';
import ScoreShart from './ScoreGraph/ScoreShart';
import RadarGraph from './RadarGraph/RadarGraph';
import BarGraph from './BarGraph/BarGraph';
import CurveGraph from './CurveGraph/CurveGraph';
import './Profil.css';

const Profil = () => {
  const [data, setData] = useState([]);
  const idUrl = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/user/${idUrl.id}/`)
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
  }, [idUrl.id, setData]);

  if (data.data === undefined || data.data === null) {
    return;
  }

  return (
    <div className={'Home'}>
      <div className={'Home-header'}>
        <h1>
          Bonjour
          <span className={'Home-firstName'}>{' ' + data.data.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className={'Home-content'}>
        <div className={'div1'}>
          <BarGraph id={idUrl.id} />
        </div>

        <div className={'div2'}>
          <FoodGraph
            data={data.data.keyData.calorieCount}
            img={fire}
            category={'Calories'}
            bgColor={'rgba(255,0,0,0.09)'}
          />

          <FoodGraph
            data={data.data.keyData.proteinCount}
            img={chicken}
            category={'Proteines'}
            bgColor={'rgba(73,183,253,0.09)'}
          />

          <FoodGraph
            data={data.data.keyData.carbohydrateCount}
            img={apple}
            category={'Glucides'}
            bgColor={'rgba(255,209,0,0.15)'}
          />

          <FoodGraph
            data={data.data.keyData.lipidCount}
            img={burger}
            category={'Lipides'}
            bgColor={'rgba(253,81,129,0.15)'}
          />
        </div>

        <div className={'div3'}>
          <CurveGraph id={idUrl.id} />
        </div>

        <div className={'div4'}>
          <RadarGraph id={idUrl.id} />
        </div>

        <div className={'div5'}>
          <ScoreShart value={50} />
        </div>
      </div>
    </div>
  );
};

export default Profil;
