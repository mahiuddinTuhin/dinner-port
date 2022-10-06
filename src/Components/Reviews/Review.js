import React from "react";

const Review = (props) => {
  const { comment } = props;
  console.log(comment);

  return (
    <div className="bg-slate-100 flex flex-col justify-center rounded-md">
      <h1 className="pt-10 px-10 text-2xl">{comment.body}</h1>
      <div className="py-3 flex  justify-center items-center">
        <img className="p-6 bg-slate-400 rounded-full" src="" alt="" />
        <h4 className="px-10 text-gray-500">
          username: {comment.user.username}
        </h4>
      </div>
    </div>
  );
};

export default Review;
