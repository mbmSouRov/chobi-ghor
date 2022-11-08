import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { _id, service_id, title, img, description, price } = data;
  console.log(service_id);
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{`${description}`.slice(0, 100) + " ...Read More"}</p>
        <p className="font-bold text-primary-focus">
          Price: <span className="text-primary font-semibold">{price} /=</span>
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={`/service/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
