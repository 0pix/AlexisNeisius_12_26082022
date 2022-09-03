import React, { useEffect, useState } from "react";
import "./Profil.css";
import { useParams } from "react-router-dom";
import StatFood from "./StatFood/StatFood";
import fire from "../../assets/StatFoodIcons/fire.svg";
import chicken from "../../assets/StatFoodIcons/chicken.svg";
import apple from "../../assets/StatFoodIcons/apple.svg";
import burger from "../../assets/StatFoodIcons/burger.svg";
import Score from "./Score/Score";
// import Time from "./Time/Time";

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
        console.log(err, " error");
      });
  }, [setData]);

  if (data.data === undefined || data.data === null) {
    return;
  }

  return (
    <div className={"Home"}>
      <div className={"Home-header"}>
        <h1>
          Bonjour
          <span className={"Home-firstName"}>
            {" " + data.data.userInfos.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className={"Home-content"}>
        <div className={"div1"}>test1</div>
        <div className={"div2"}>
          <StatFood
            data={data.data.keyData.calorieCount}
            img={fire}
            category={"Calories"}
            bgColor={"rgba(255,0,0,0.09)"}
          />
          <StatFood
            data={data.data.keyData.proteinCount}
            img={chicken}
            category={"Proteines"}
            bgColor={"rgba(73,183,253,0.09)"}
          />
          <StatFood
            data={data.data.keyData.carbohydrateCount}
            img={apple}
            category={"Glucides"}
            bgColor={"rgba(255,209,0,0.15)"}
          />
          <StatFood
            data={data.data.keyData.lipidCount}
            img={burger}
            category={"Lipides"}
            bgColor={"rgba(253,81,129,0.15)"}
          />
        </div>
        <div className={"div3"}>{/*<Time />*/}</div>
        <div className={"div4"}>test</div>
        <div className={"div5"}>
          <Score />
        </div>
      </div>
    </div>
  );
};

export default Profil;
