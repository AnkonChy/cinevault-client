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
          const sortMoviesRes = await fetch("https://movie-portal-server-neon.vercel.app/sortMovies");
          const sortMoviesData = await sortMoviesRes.json();

          const latestMoviesRes = await fetch(
            "https://movie-portal-server-neon.vercel.app/latestMovies"
          );
          const latestMoviesData = await latestMoviesRes.json();
          const banglaMoviesRes = await fetch(
            "https://movie-portal-server-neon.vercel.app/banglaMovies"
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
        loader: () => fetch("https://movie-portal-server-neon.vercel.app/allMovies"),
      },
      {
        path: "/movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://movie-portal-server-neon.vercel.app/movie/${params.id}`),
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
          fetch(`https://movie-portal-server-neon.vercel.app/movie/${params.id}`),
      },
      {
        path:"/aboutUs",
        element:<AboutUs></AboutUs>
      }
    ],
  },
]);

export default router;
