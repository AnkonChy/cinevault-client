import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLoginbtn = () => {
    handleGoogleLogin().then((res) => {
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   get value from input
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.warn(err.code);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#676179]">
      <div className="md:flex gap-4 p-4  rounded-xl bg-[#2B2738]">
        <div className="relative">
          <img
            className="w-[500px] h-full rounded-lg object-cover"
            src="https://i.ibb.co.com/Pgbgbw6/anastasiia-nelen-8-Jhv8ot-ZMd4-unsplash.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#2B2738] bg-opacity-30"></div>
        </div>
        <div className="card  bg-[#2B2738] w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-[#FFFEFF] ml-7 mt-2">
            Login Your Account
          </h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="mt-3 text-base  text-white hover:text-gray-400">
                <Link to="/forgetPass" className="link">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#6E54B5] border-none text-white hover:bg-purple-950">
                Login
              </button>
            </div>
          </form>
          <p className="text-white ml-9 pb-4">
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </p>
          <div className="divider  divider-warning mt-0 text-[#D0CFD1]">
            OR register with
          </div>
          <button
            onClick={handleGoogleLoginbtn}
            className=" text-lg btn w-3/4 mx-auto bg-[#2B2738] text-[#D0CFD1] hover:text-black"
          >
            <FcGoogle className="" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
