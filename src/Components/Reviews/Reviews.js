import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";

const Reviews = () => {
  const reviews = useLoaderData();
  const { comments } = reviews;
  return (
    <div
      className=" my-10 mx-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10 xl:gap-5
    justify-center"
    >
      {comments.map((comment) => (
        <Review comment={comment}></Review>
      ))}
    </div>
  );
};

export default Reviews;
