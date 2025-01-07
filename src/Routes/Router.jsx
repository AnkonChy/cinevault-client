import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AddMovie from "../Pages/AddMovie/AddMovie";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute";
import AllMovies from "../Pages/AllMovies/AllMovies";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import FavMovies from "../Components/FavMovies/FavMovies";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateMovie from "../Pages/UpdateMovie/UpdateMovie";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Support from "../Pages/Support/Support";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const sortMoviesRes = await fetch("http://localhost:4000/sortMovies");
          const sortMoviesData = await sortMoviesRes.json();

          const latestMoviesRes = await fetch(
            "http://localhost:4000/latestMovies"
          );
          const latestMoviesData = await latestMoviesRes.json();
          const banglaMoviesRes = await fetch(
            "http://localhost:4000/banglaMovies"
          );
          const banglaMoviesData = await banglaMoviesRes.json();
          return { sortMoviesData, latestMoviesData, banglaMoviesData };
        },
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addMovies",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("http://localhost:4000/allMovies"),
      },
      {
        path: "/movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/movie/${params.id}`),
      },
      {
        path: "/myFavourite",
        element: (
          <PrivateRoute>
            <FavMovies></FavMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/movie/${params.id}`),
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
    ],
  },
]);

export default router;
