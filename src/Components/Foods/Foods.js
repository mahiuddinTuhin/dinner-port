import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "./Food";

const Foods = () => {
  const foods = useLoaderData();
  const { categories } = foods;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 mx-10 my-20 justify-center justify-items-center">
      {categories.map((food) => (
        <Food key={food.idCategory} food={food}></Food>
      ))}
    </div>
  );
};

export default Foods;
