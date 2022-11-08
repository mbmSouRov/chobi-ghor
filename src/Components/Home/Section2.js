import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Section2 = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div className="m-10">
      <p>Our Services</p>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.service_id} data={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Section2;
