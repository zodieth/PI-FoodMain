import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDietName } from "../../redux/actions";
// import Card from "../Card/Card";
import style from "./cardName.module.css";

function CardName() {
  const { name } = useParams();

  // let dietsState = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDietName(name));
  }, [dispatch, name]);

  return (
    <div className={style.container}>
      {/* {dietsState.length > 0 ? (
        dietsState.map((c) => (
          <Card key={c.id} name={c.title} image={c.image} diets={c.diets} />
        ))
      ) : (
        <h2>loading..</h2>
      )} */}
    </div>
  );
}

export default CardName;
