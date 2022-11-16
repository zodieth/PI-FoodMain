import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./searchBar.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getDietName } from "../../redux/actions";

function SearchBar() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder="Search Recipe..."
        onChange={handleChange}
      />
      <Link to={`/diets/${input}`}>
        {" "}
        <button type="submit" className={style.button} onSubmit={handleSubmit}>
          GO
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
