import React from "react";
import { Link } from "react-router-dom";

const BanglaMovies = ({ movie }) => {
  const { _id, poster, title, genre, duration, year, rating } = movie;
  return (
    <div className="card bg-base-100 image-full shadow-xl">
      <figure>
        <img src={poster} alt="banglaMovies" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link to={`/movie/${_id}`}>
            <button className="mt-20 text-lg py-2 px-6 rounded-full bg-gray-800 text-white border hover:bg-blue-900">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BanglaMovies;
