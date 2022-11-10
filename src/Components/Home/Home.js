import React from "react";
import useTitle from "../../hooks/useTitle";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Section1></Section1>
      <Section2></Section2>
      <Section4></Section4>
      <Section3></Section3>
    </div>
  );
};

export default Home;
