import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import RecipeDetail from "./pages/RecipeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "recipes", element: <Recipes /> },
      { path: "recipes/:recipeId", element: <RecipeDetail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
