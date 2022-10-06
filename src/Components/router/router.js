import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import FoodByID from "../CategoricalFood/FoodByID";
import TypeFoods from "../CategoricalFood/TypeFoods";
import Page4048 from "../Error/Page4048";
import Foods from "../Foods/Foods";
import { Hero } from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
          );
        },
        element: <Hero></Hero>,
      },
      {
        path: "/foods",
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
          );
        },
        element: <Foods></Foods>,
      },
      {
        path: "/food/:foodByName",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.foodByName}`
          );
        },
        element: <TypeFoods></TypeFoods>,
      },
      {
        path: "category/:catId",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.catId}`
          );
        },
        element: <FoodByID></FoodByID>,
      },
      {
        path: "/reviews",
        loader: async () => {
          return fetch(`https://dummyjson.com/comments`);
        },
        element: <Reviews></Reviews>,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>404 not working</h1>,
  }
]);
