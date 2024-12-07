import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const LatestMovies = ({ movie }) => {
  const { _id, poster, title, genre, duration, year, rating } = movie;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={poster} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{year}</div>
        </h2>
        <p></p>
        <div className="card-actions justify-end">
          {genre.map((g, index) => (
            <div key={index} className="badge badge-outline">
              {g}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestMovies;
