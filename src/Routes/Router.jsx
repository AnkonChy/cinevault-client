import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AddMovie from "../Pages/AddMovie/AddMovie";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute";
import AllMovies from "../Pages/AllMovies/AllMovies";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Favourite from "../Components/Favourite/Favourite";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
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
          return { sortMoviesData };
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
        path: "/favourite",
        element: (
          <PrivateRoute>
            <Favourite></Favourite>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
