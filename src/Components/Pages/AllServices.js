import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../Home/ServiceCard";

const AllServices = () => {
  const { loading } = useContext(AuthContext);
  useTitle("All Services");
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, [allServices]);
  if (loading) {
    return (
      <div>
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  return (
    <div className="grid grid-col-1 lg:grid-cols-3 gap-5">
      {allServices.map((service) => (
        <ServiceCard key={service._id} data={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllServices;
