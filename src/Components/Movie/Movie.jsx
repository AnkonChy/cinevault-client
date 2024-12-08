import React from "react";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  const { _id, poster, title, genre, duration, year, rating } = movie;
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-none">
      <figure>
        <img className="w-full h-80 object-cover" src={poster} alt="Movies" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex justify-between items-center">
          <p>
            <span className="font-bold">Genre</span>
            {genre.map((g, index) => (
              <ul className="text-sm font-medium list-disc ml-6" key={index}>
                <li>{g}</li>
              </ul>
            ))}
          </p>
          <p className="font-semibold text-right">Duration : {duration}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Release Year: {year}</p>
          <Rating
            className="text-blue-900 text-lg"
            initialRating={rating}
            readonly
            emptySymbol={<CiStar />}
            fullSymbol={<FaStar />}
            fractions={2}
          />
        </div>

        <div className="card-actions justify-center mt-4">
          <Link to={`/movie/${_id}`}>
            <button className="text-lg py-2 px-6 rounded-full bg-gray-800 text-white border hover:bg-blue-900">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
