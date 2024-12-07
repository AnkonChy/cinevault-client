import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/wRGvZSr/mahrous-houses-GHX68-Am-E1g-Q-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Welcome to <span className="font-bold">Cine Vault</span>, your go-to
            platform for exploring movies across all genres. From classics to
            blockbusters, we bring you reviews, recommendations, and everything
            a movie lover needs. Dive into the world of cinema with us!
          </p>
          <Link to="/">
            <button className="btn bg-gray-400">
              Get Started with CineVault
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
