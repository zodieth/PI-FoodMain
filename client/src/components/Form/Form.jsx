import { React, useState } from "react";
import axios from "axios";

function Form() {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    types: "",
    summary: "",
    healthScore: "",
    stepByStep: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setRecipe({
      name: "",
      image: "",
      types: "",
      summary: "",
      healthScore: "",
      stepByStep: "",
    });

    await axios.post("http://localhost:3001/recipes", recipe);
    console.log(recipe);
  }

  function handleChange(e) {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" onChange={handleChange} />
      </label>
      <label>
        Image
        <input name="image" type="text" onChange={handleChange} />
      </label>
      <label>
        Types
        <input name="types" type="text" onChange={handleChange} />
      </label>
      <label>
        Summary
        <input name="summary" type="text" onChange={handleChange} />
      </label>
      <label>
        HealthScore
        <input name="healthScore" type="text" onChange={handleChange} />
      </label>
      <label>
        StepByStep
        <input name="stepByStep" type="text" onChange={handleChange} />
      </label>
      <button type="submit" onSubmit={handleSubmit}>
        CREATE
      </button>
    </form>
  );
}

export default Form;
