import React from "react";
import style from "./card.module.css";

function Card(props) {
  return (
    <div className={style.container}>
      <h1 className={style.name}>{props.name}</h1>
      <img className={style.img} src={props.image} alt="img" />
      <h1 className={style.diets}>{props.diets}</h1>
      <h4 className={style.step}>{props.stepByStep}</h4>
    </div>
  );
}

export default Card;
