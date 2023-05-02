import React from "react";
import { Link, useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  return (
    <div>
      <div>{recipeId}</div>
      <Link to=".." relative="path">Back</Link>
    </div>
  );
};

export default RecipeDetail;
