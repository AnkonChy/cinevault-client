import React, { useState } from "react";
import Slider from "../../Components/Slider/Slider";
import { NavLink, useLoaderData } from "react-router-dom";
import FeaturedMovie from "../../Components/FeaturedMovie/FeaturedMovie";

const Home = () => {
  const { sortMoviesData } = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <div className="mt-20 w-11/12 mx-auto">
        <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold">
          Featured Movies
        </h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6  my-10">
          {sortMoviesData.slice(0, 6).map((movie) => (
            <FeaturedMovie key={movie._id} movie={movie}></FeaturedMovie>
          ))}
        </div>
      </div>
      <NavLink to="/allMovies">
        <button className="text-lg py-3 px-8 rounded-full text-[#01AA90] border-2 border-[#01AA90] hover:bg-[#01AA90] hover:text-white  block mx-auto">
          See All Movies
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
