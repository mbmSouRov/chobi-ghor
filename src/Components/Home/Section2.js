import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Section2 = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div className="m-2 lg:m-10">
      <p>Our Services</p>
      <div className="grid grid-col-1 lg:grid-cols-3 gap-1 lg:gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} data={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-primary my-10">
        <Link to={"/allServices"}>See All</Link>
      </button>
    </div>
  );
};

export default Section2;
