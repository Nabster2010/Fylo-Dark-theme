import React from "react";

const Card = ({ img, title, txt }) => {
  return (
    <div className="w-80  flex flex-col justify-center items-center text-center text-White ">
      <img src={img} alt="" />
      <h2 className="mt-6 font-bold">{title}</h2>
      <p className="mt-4 text-sm">{txt}</p>
    </div>
  );
};

export default Card;
