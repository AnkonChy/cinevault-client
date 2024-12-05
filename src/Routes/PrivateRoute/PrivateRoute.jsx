import React, { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
