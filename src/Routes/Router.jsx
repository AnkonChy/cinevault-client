import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AddMovie from "../Pages/AddMovie/AddMovie";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute";
import AllMovies from "../Pages/AllMovies/AllMovies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
      },
      {
        path: "/favourite",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
