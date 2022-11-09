import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const { userLogIn, userLogInWithGoogle } = useContext(AuthContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        console.log("user is: ", result.user);
        form.reset();
      })
      .catch((error) => {
        console.log("Something Wrong With Login", error.message);
      });
  };

  const handleGoogleLogIn = (event) => {
    event.preventDefault();
    userLogInWithGoogle()
      .then((userInfo) => {
        console.log(userInfo.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/4">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleOnSubmit} className="card-body">
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
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
              <label className="label">
                <Link
                  to={"/signup"}
                  className="label-text-alt link link-hover text-primary-focus"
                >
                  New Here? Create New Account
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <button
                onClick={handleGoogleLogIn}
                className="btn btn-outline btn-primary mt-2"
              >
                <FaGoogle />
                <p className="mx-2">Continue With Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
