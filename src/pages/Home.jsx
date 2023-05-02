import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/recipes")
  }

  return (
    <>
      <h1>homepage</h1>
      <button onClick={navigationHandler}>redirect to recipes</button>
    </>
  );
};

export default Home;
