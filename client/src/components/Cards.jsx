import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { getDiets } from "../redux/actions";
import { Link } from "react-router-dom";
import style from "./cards.module.css";

function Cards() {
  let dietsState = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className={style.container}>
      {dietsState.length > 0 ? (
        dietsState.map((c) => (
          <Link key={c.id} to={`/diets/${c.id}`}>
            <Card key={c.id} name={c.name} image={c.image} diets={c.diets} />
          </Link>
        ))
      ) : (
        <h2>loading..</h2>
      )}
    </div>
  );
}

export default Cards;
