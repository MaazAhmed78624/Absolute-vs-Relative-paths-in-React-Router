import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  return (
    <div>
      <div>{recipeId}</div>
    </div>
  );
};

export default RecipeDetail;
