import React from "react";
import "./Home.css";
import StatFood from "../../components/home/StatFood";
import fire from "../../assets/StatFoodIcons/fire.svg";
import chicken from "../../assets/StatFoodIcons/chicken.svg";
import apple from "../../assets/StatFoodIcons/apple.svg";
import burger from "../../assets/StatFoodIcons/burger.svg";

const Home = ({ data }) => {
  console.log(data);

  /*  if (data === undefined) {
    return;
  }*/

  return (
    <div className={"Home"}>
      <div className={"Home-header"}>
        <h1>
          Bonjour
          <span className={"Home-firstName"}>
            {" " + data.userInfos.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className={"Home-content"}>
        <div className={"div1"}>test1</div>
        <div className={"div2"}>
          <StatFood
            data={data.keyData.calorieCount}
            img={fire}
            category={"Calories"}
            bgColor={"rgba(255,0,0,0.09)"}
          />
          <StatFood
            data={data.keyData.proteinCount}
            img={chicken}
            category={"Proteines"}
            bgColor={"rgba(73,183,253,0.09)"}
          />
          <StatFood
            data={data.keyData.carbohydrateCount}
            img={apple}
            category={"Glucides"}
            bgColor={"rgba(251,202,9,0.09)"}
          />
          <StatFood
            data={data.keyData.lipidCount}
            img={burger}
            category={"Lipides"}
            bgColor={"rgba(251,80,128,0.09)"}
          />
        </div>
        <div className={"div3"}>test</div>
        <div className={"div4"}>test</div>
        <div className={"div5"}>test</div>
      </div>
    </div>
  );
};

export default Home;
