import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getDietsId } from "../../redux/actions";
import style from "./cardDetail.module.css";
import { Link, useParams } from "react-router-dom";

function CardDetail(props) {
  const { id } = useParams();

  let dietsState = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDietsId(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      {dietsState.length > 0 ? (
        dietsState.map((c) => (
          <Link key={c.id} to={`/diets/${c.id}`}>
            <Card
              key={c.id}
              name={c.title}
              image={c.image}
              diets={c.diets}
              stepByStep={c.stepByStep}
            />
          </Link>
        ))
      ) : (
        <h2>loading..</h2>
      )}
    </div>
  );
}

export default CardDetail;
