import React from "react";
import "./StatFood.css";

function StatFood({ data, img, bgColor, category }) {
  /*  if (data === undefined) {
		return;
	}*/

  return (
    <div className={"StatFood"}>
      <div style={{ backgroundColor: bgColor }} className={"StatFood-img"}>
        <img src={img} alt={`icon-${category}`} />
      </div>
      <div className={"StatFood-text"}>
        <span className={"StatFood-number"}>
          {data}
          {category === "Calories" ? "kCal" : "g"}
        </span>
        <span className={"StatFood-category"}>{category}</span>
      </div>
    </div>
  );
}

export default StatFood;
