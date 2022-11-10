import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Signup = () => {
  useTitle("Signup");
  const navigate = useNavigate();
  const { userSignUp, updateUserProfile } = useContext(AuthContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.image.value;

    userSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        handleUpdateProfile(name, photoURL);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleUpdateProfile = (name, profilePic) => {
    const profile = {
      displayName: name,
      photoURL: profilePic,
    };
    updateUserProfile(profile)
      .then((result) => {
        console.log("Registration Completed");
      })
      .catch((error) => {
        console.log("Somthing Wrong With Registration", error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Signup now!</h1>
          <p className="py-6">
            Sign Up And Discover a great amount of new opportunities!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleOnSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="image"
                type="URL"
                placeholder="image URL"
                className="input input-bordered"
              />
            </div>
            <label className="label">
              <Link
                to={"/login"}
                className="label-text-alt link link-hover text-primary-focus"
              >
                Already Have An Account? Click Here!
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
