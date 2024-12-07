import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movie from "../../Components/Movie/Movie";

const AllMovies = () => {
  const movies = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl text-center my-6">All Movies</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
