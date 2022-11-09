import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (user && user.uid) {
    return Children;
  }

  return (
    <div>
      <Navigate to={"/login"} state={{ from: location }}></Navigate>
    </div>
  );
};

export default PrivateRoutes;
