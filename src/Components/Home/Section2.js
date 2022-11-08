import React, { useEffect, useState } from "react";

const Section2 = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div>
      <p>Our Services</p>
      <p>{services.length}</p>
    </div>
  );
};

export default Section2;
