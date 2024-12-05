import React from "react";

const AddMovie = () => {
  return (
    <div>
      <div className="bg-[#F4F3F0] lg:p-24">
        <h2 className="text-3xl text-center font-bold">Add New Movie</h2>
        <form>
          <div className="md:flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Poster</span>
              </label>
              <input
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
              <select className="input input-bordered " name="genre" id="genre">
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="thriller">Thriller</option>
                <option value="action">Action</option>
                <option value="animation">Animation</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Science Fiction</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Duration(min)</span>
              </label>
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Release Year</span>
              </label>
              <select className="input input-bordered " name="year" id="year">
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
              <input
                type="text"
                name="rating"
                placeholder="rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="form-control md:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Summary</span>
              </label>
              <input
                type="text"
                name="summary"
                placeholder="summary"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* End of Labels */}
          <input
            type="submit"
            value="Add Schedule"
            className="btn w-full bg-green-800 text-white mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
