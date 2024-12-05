import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movieData = useLoaderData();
  const { _id, poster, title, genre, duration, year, rating, summary } =
    movieData;
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="lg:flex lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-2xl h-[400px] object-cover"
            src={poster}
            alt=""
          />
        </div>
        <div className=" p-10 space-y-4 w-full lg:w-1/2">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="font-medium text-gray-500">{summary}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-lg">Genre:</h3>
              <p>{genre}</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-lg">Release Year: </h3>
              <p>{year}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-lg">Duration:</h3>
              <p>{duration}</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-lg">Rating: </h3>

              <Rating
                className="text-blue-900 text-lg mt-1"
                initialRating={rating}
                readonly
                emptySymbol={<CiStar />}
                fullSymbol={<FaStar />}
                fractions={2}
              />
            </div>
          </div>
          <div className="flex py-4">
            <button className="btn btn-success block mx-auto text-white">
              Delete Movie
            </button>
            <button className="btn btn-success block mx-auto text-white">
              Add to Favourtie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
