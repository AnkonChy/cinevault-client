import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";

const UpdateMovie = () => {
  const { id } = useParams();
  const singleMovieData = useLoaderData();
  const [selectedGenres, setSelectedGenres] = useState(
    singleMovieData.genre || []
  );

  const handleGenreChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const values = selectedOptions.map((option) => option.value);
    setSelectedGenres(values);
  };

  const [poster, setPoster] = useState(singleMovieData.poster);
  const [title, setTitle] = useState(singleMovieData.title);
  const [duration, setDuration] = useState(singleMovieData.duration);
  const [year, setYear] = useState(singleMovieData.year);
  const [rating, setRating] = useState(singleMovieData.rating);
  const [language, setLanguage] = useState(singleMovieData.language);
  const [summary, setSummary] = useState(singleMovieData.summary);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^(https?:\/\/)([\w\-]+(\.[\w\-]+)+)(\/[^\s]*)?$/.test(poster)) {
      toast.warn("Please give a image link");
      return;
    }
    if (title.length < 2) {
      toast.warn("Title must be at least 2 characters");
      return;
    }
    if (duration < 60 || duration > 200) {
      toast.warn("Duration must exceed 60 and 150 minutes");
      return;
    }
    if (rating === 0) {
      toast.warn("Please give a rating");
      return;
    }
    if (summary.length < 10) {
      toast.warn("Summary must be 10 characters");
      return;
    }
    const data = {
      poster: poster,
      title: title,
      genre: selectedGenres,
      duration: duration,
      year: year,
      rating: rating,
      language: language,
      summary: summary,
    };
    fetch(`http://localhost:4000/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Movie data updated");
      });
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] lg:p-24">
        <h2 className="text-3xl text-center font-bold">Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Poster</span>
              </label>
              <input
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
                type="text"
                name="poster"
                placeholder="Poster"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Title</span>
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Genre</span>
              </label>
              <select
                className="input input-bordered  h-40"
                name="genre"
                id="genre"
                value={selectedGenres}
                onChange={handleGenreChange}
                required
                multiple
              >
                <option disabled selected>
                  Select Genre
                </option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="thriller">Thriller</option>
                <option value="action">Action</option>
                <option value="animation">Animation</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Science Fiction</option>
                <option value="sci-fi">Superhero Fiction</option>
              </select>
            </div>

            <div className="form-control w-full md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
                name="summary"
                id="summary"
                rows="5"
                className="rounded-md p-3"
                placeholder="Write summary"
              ></textarea>
            </div>
          </div>
          <div className="md:flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Release Year</span>
              </label>
              <select
                className="input input-bordered "
                value={year}
                onChange={(e) => setYear(e.target.value)}
                name="year"
                id="year"
                required
              >
                <option value="" disabled selected>
                  Select Year
                </option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Rating</span>
              </label>
              <Rating
                initialValue={rating}
                onChange={(e) => setRating(e.target.value)}
                onClick={handleRating}
                required
              />
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Release Year</span>
              </label>
              <select
                className="input input-bordered "
                value={year}
                onChange={(e) => setLanguage(e.target.value)}
                name="language"
                id="language"
                required
              >
                <option value="" disabled selected>
                  Select Language
                </option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Bangla">Bangla</option>
                <option value="Telegu">Telegu</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Malayalam">Tamil</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Duration(min)</span>
              </label>
              <input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="number"
                name="duration"
                placeholder="Duration"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* End of Labels */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn w-full bg-green-800 text-white mt-6"
          >
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
