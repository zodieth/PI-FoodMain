import React from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";
import { getDiets } from "../../redux/actions";

function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
    getDiets();
  }

  return (
    <div className={style.nav}>
      <div>
        {/* <Link to={"/home"}> */}
        <button onSubmit={handleSubmit} className={style.buttonHome}>
          HOME
        </button>
        {/* </Link> */}
      </div>
      <Link to={"/form"}>
        <button className={style.button}>CREATE RECIPE</button>
      </Link>
    </div>
  );
}

export default Nav;
