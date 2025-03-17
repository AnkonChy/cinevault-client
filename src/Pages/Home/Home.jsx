import React, { useEffect, useState } from "react";
import Slider from "../../Components/Slider/Slider";
import { NavLink, useLoaderData } from "react-router-dom";
import FeaturedMovie from "../../Components/FeaturedMovie/FeaturedMovie";
import LatestMovies from "../../Components/LatestMovies/LatestMovies";
import BanglaMovies from "../../Components/BanglaMovies/BanglaMovies";
import WebSeries from "../../Components/WebSeries/WebSeries";
// import AOS from "aos";
// import "aos/dist/aos.css";
const Home = () => {
  const { sortMoviesData, latestMoviesData, banglaMoviesData } =
    useLoaderData();

  // useEffect(() => {
  //   AOS.init();
  // });
  return (
    <div>
      <Slider></Slider>
      <div className="mt-10 w-11/12 mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Featured Movies
        </h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6  my-10">
          {sortMoviesData.map((movie) => (
            <FeaturedMovie key={movie._id} movie={movie}></FeaturedMovie>
          ))}
        </div>
        <NavLink to="/allMovies">
          <button className="text-lg py-3 px-8 rounded-full text-black border-2 border-black hover:bg-black hover:text-white  block mx-auto">
            See All Movies
          </button>
        </NavLink>
      </div>
      <div className="mt-20 w-11/12 mx-auto">
        <h1 className=" animate__animated animate__fadeInLeft  text-3xl md:text-4xl lg:text-5xl font-bold">
          Latest Movies
        </h1>
        <div
          className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6  my-10"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {latestMoviesData.slice(0, 3).map((movie) => (
            <LatestMovies key={movie._id} movie={movie}></LatestMovies>
          ))}
        </div>
      </div>
      <div className="mt-20 w-11/12 mx-auto">
        <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold">
          Bangla Movies
        </h1>
        <div
          className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6  my-10"
          data-aos="fade-down-right"
        >
          {banglaMoviesData.slice(0, 3).map((movie) => (
            <BanglaMovies key={movie._id} movie={movie}></BanglaMovies>
          ))}
        </div>
      </div>
      <div className="pt-20 w-11/12 mx-auto">
        <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold my-4">
          Web Series
        </h1>
        <div>
          <WebSeries></WebSeries>
        </div>
      </div>
    </div>
  );
};

export default Home;
