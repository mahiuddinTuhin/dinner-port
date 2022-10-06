import React from "react";
import { useLoaderData } from "react-router-dom";
import TypeFood from "./TypeFood";

const TypeFoods = () => {
  const foods = useLoaderData();
  const { meals } = foods;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 mx-10 my-20 justify-center justify-items-center">
      {meals.map((meal) => (
        <TypeFood key={meal.idMeal} meal={meal}></TypeFood>
      ))}
    </div>
  );
};

export default TypeFoods;
