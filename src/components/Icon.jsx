import React from "react";
import "./Icon.css";

function Icon({ img }) {
  return (
    <a className={"Icon"}>
      <img src={img} alt={"icon"} />
    </a>
  );
}

export default Icon;
