import React from "react";
import style from "./card.module.css";

function Card(props) {
  return (
    <div className={style.container}>
      <h1>{props.name}</h1>
      <img className={style.img} src={props.image} alt="img" />
      <h1>{props.diets}</h1>
    </div>
  );
}

export default Card;
