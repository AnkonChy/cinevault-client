import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movie from "../../Components/Movie/Movie";

const AllMovies = () => {
  const moviesData = useLoaderData();

  const [search, setSearch] = useState("");

  const [movies, setMovies] = useState(moviesData);

  useEffect(() => {
    fetch(`http://localhost:4000/allMovies?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [search]);

  return (
    <div className="w-11/12 mx-auto mt-28">
      <h1 className="font-medium text-4xl text-center my-6">All Movies</h1>
      <label className="input input-bordered flex items-center gap-2 w-1/3 mx-auto my-6">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          name="search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
