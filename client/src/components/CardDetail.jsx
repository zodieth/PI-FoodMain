import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { getDietsId } from "../redux/actions";
import style from "./cardDetail.module.css";
import { useParams } from "react-router-dom";

function CardDetail(props) {
  const { id } = useParams();

  let dietsState = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDietsId(id));
  }, [dispatch]);

  return (
    <div className={style.container}>
      {dietsState.length > 0 ? (
        dietsState.map((c) => (
          <Card key={c.id} name={c.title} image={c.image} diets={c.diets} />
        ))
      ) : (
        <h2>loading..</h2>
      )}
    </div>
  );
}

export default CardDetail;
