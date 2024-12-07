import { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const MovieDetails = () => {
  const singleMovieData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { email } = user;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/movie/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate("/allMovies");
      });
  };
  const data = {
    poster: singleMovieData.poster,
    title: singleMovieData.title,
    genre: singleMovieData.genre,
    duration: singleMovieData.duration,
    year: singleMovieData.year,
    summary: singleMovieData.summary,
    rating: singleMovieData.rating,
    email: email,
  };

  const handleAddToFav = () => {
    fetch(`http://localhost:4000/addFavMovie`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => toast.success("Movie added to favourite list"));
  };
  const {
    _id,
    poster,
    title,
    genre,
    duration,
    year,
    rating,
    summary,
    language,
  } = singleMovieData;
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
              <p>
                <span className="font-medium text-lg">Genre</span>
                {genre.map((g, index) => (
                  <ul
                    className="text-sm font-medium list-disc ml-6"
                    key={index}
                  >
                    <li>{g}</li>
                  </ul>
                ))}
              </p>
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
              <h3 className="font-medium text-lg">Language: </h3>

              {language}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-lg">Rating : </h3>
            <Rating
              className="text-blue-900 text-lg mt-1"
              initialRating={rating}
              readonly
              emptySymbol={<CiStar />}
              fullSymbol={<FaStar />}
              fractions={2}
            />
          </div>
          <div className="flex py-4">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-success block mx-auto text-white"
            >
              Delete Movie
            </button>
            <button
              onClick={() => {
                handleAddToFav(singleMovieData);
              }}
              className="btn btn-success block mx-auto text-white"
            >
              Add to Favourtie
            </button>
            <Link to={`/update/${_id}`}>
              <button className="btn btn-success block mx-auto text-white">
                Update Movie
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
