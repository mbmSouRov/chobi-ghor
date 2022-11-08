import React from "react";

const ServiceCard = ({ data }) => {
  const { title, img, description } = data;
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{`${description}`.slice(0, 100) + " ...Read More"}</p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
