import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ post }) => {
  const navigate = useNavigate();

  const handlePost = (id) => {
    navigate("/post/" + post.id);
  };

  return (
    <div className="card">
      <span className="title">{post.title}</span>
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <button onClick={handlePost} className="cardButton">
        Read Mores
      </button>
    </div>
  );
};
