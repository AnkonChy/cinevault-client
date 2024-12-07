import React, { useContext, useEffect, useState } from "react";
import FavMovie from "../FavMovie/FavMovie";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { FaMobile } from "react-icons/fa";

const Favourite = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/allFavMovies?email=${email}`)
      .then((res) => res.json())
      .then((data) => setFavMovies(data));
  }, [email]);

  return (
    <div className="w-11/12 mx-auto mt-14">
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl text-center font-bold my-10">
        Favourite Movies
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favMovies.map((favMovie) => (
          <FavMovie
            key={favMovie._id}
            favMovie={favMovie}
            favMovies={favMovies}
            setFavMovies={setFavMovies}
          ></FavMovie>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
