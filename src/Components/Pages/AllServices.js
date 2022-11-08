import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/ServiceCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, [allServices]);

  return (
    <div className="grid grid-cols-3 gap-5">
      {allServices.map((service) => (
        <ServiceCard key={service._id} data={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllServices;
