import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/314507183_643652950549071_5359887839904463831_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFnRuRZa4ASpcloLdB2xP2QK31PqBdX_LArfU-oF1f8sLpBA6cfNwFr4A9XfclnIq4eiwV1BXjTKdwNjX1uWWNX&_nc_ohc=Qo8KCgfMTRIAX89RLvd&_nc_ht=scontent.fdac27-2.fna&oh=00_AfDtAijvX71GQu6NK61_ot9YvYLg9KMe0wd4MLgwThCkPA&oe=636E2915")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Are you a event manager, drone service providers, videographer and
            you need an online presence to take your brand to the next level and
            spice things up with perfect booking system that you desire??
            <br />
            If Yes, then you are at the right place, I will set up and build a
            professional photography Website that will portrays your work.
          </p>
          <button className="btn btn-primary">
            <Link to={"/allServices"}>Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
