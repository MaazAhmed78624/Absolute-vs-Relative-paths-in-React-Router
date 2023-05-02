import React from "react";
import { Link } from "react-router-dom";

const DUMMY_RECIPES = [
  { id: "r1", title: "recipe 1" },
  { id: "r2", title: "recipe 2" },
  { id: "r3", title: "recipe 3" },
];

const Recipes = () => {
  return (
    <>
      <div>Recipes</div>
      <ul>
        {DUMMY_RECIPES.map((recipe) => {
          return (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Recipes;
