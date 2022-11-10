import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <button className="btn btn-square loading"></button>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }

  return (
    <div>
      <Navigate to={"/login"} state={{ from: location }}></Navigate>
    </div>
  );
};

export default PrivateRoutes;
