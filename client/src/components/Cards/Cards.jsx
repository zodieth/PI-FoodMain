import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getDiets } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./cards.module.css";
import Paginado from "../Paginado/Paginado";
import { filterOrder, filterDiet } from "../../redux/actions";

function Cards() {
  let dietsState = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  //--------------Paginado-----------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);
  const LastRecipe = currentPage * recipesPerPage; // 9
  const FirstRecipe = LastRecipe - recipesPerPage; // 0
  const currentRecipes = dietsState.slice(FirstRecipe, LastRecipe);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //---------------------------------------------

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(filterOrder(e.target.value));
  };

  const handleChange2 = (e) => {
    dispatch(filterDiet(e.target.value));
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option>FILTERS</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <select onChange={handleChange2}>
        <option value="diets">DIETS</option>
        <option value="primal">PRIMAL</option>
        <option value="pescatarian">PESCATARIAN</option>
        {/* <option value="ovo-vegetarian">OVO-VEGETARIAN</option> */}
        <option value="gluten free">GLUTEN FREE</option>
        <option value="fodmap friendly">FODMAP FRIENDLY</option>
        <option value="paleolithic">PALEOLITHIC</option>
        {/* <option value="paleo">PALEO</option> */}
        <option value="lacto ovo vegetarian">LACTO OVO-VEGETARIAN</option>
        {/* <option value="vegetarian">VEGETARIAN</option> */}
        <option value="vegan">VEGAN</option>
        {/* <option value="lacto-vegetarian">LACTO VEGETARIAN</option> */}
        <option value="whole 30">WHOLE 30</option>
        <option value="ketogenic">KETOGENIC</option>
        <option value="dairy free">DAIRY FREE</option>
        {/* <option value="low fodmap">LOW FODMAP</option> */}
      </select>
      <div>
        <Paginado
          recipesPerPage={recipesPerPage}
          dietsState={dietsState.length}
          paginado={paginado}
        />
      </div>
      <div className={style.container}>
        {currentRecipes.length > 0 ? (
          currentRecipes.map((c) => (
            <Link key={c.id} to={`/diets/${c.id}`}>
              <Card key={c.id} name={c.name} image={c.image} diets={c.diets} />
            </Link>
          ))
        ) : (
          <h2>loading..</h2>
        )}
      </div>
    </div>
  );
}

export default Cards;
