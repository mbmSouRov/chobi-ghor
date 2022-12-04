import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import PrivateRoutes from "../Routes/PrivateRoutes";
import AddReview from "./AddReview";
import SeeReview from "./SeeReview";

const Service = () => {
  useTitle("Service");
  const { _id, title, img, description, price } = useLoaderData();
  return (
    <div>
      <div className="flex-row lg:flex justify-center">
        <div className="w-full lg:w-3/5 p-2 lg:p-10">
          <div>
            <p className="text-4xl font-light text-primary p-5">{title}</p>
          </div>
          <div>
            <img className="w-4/5 rounded-lg mx-auto" src={img} alt="sad" />
          </div>
          <div>
            <p className="text-2xl mt-6 text-primary-focus">
              Price: {price} Bdt only
            </p>
          </div>
          <div className="mt-10">
            <div className="collapse justify-center">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content w-60 lg:w-96 mx-auto">
                <p className="ml-10">Click here to see full Description</p>
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content w-60 lg:w-96 mx-auto justify-center">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 p-2 lg:p-10">
          <p className="text-3xl font-light">Review And Others</p>
          <SeeReview id={_id}></SeeReview>

          <AddReview id={_id}></AddReview>
        </div>
      </div>
    </div>
  );
};

export default Service;
