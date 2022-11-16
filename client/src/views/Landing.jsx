import React from "react";
import { Link } from "react-router-dom";
import style from "./css/landing.module.css";

function Landing() {
  return (
    <div className={style.landing}>
      <div className={style.container}>
        <Link to="/home">
          <button className={style.button}>HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
