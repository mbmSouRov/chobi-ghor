import React from "react";

const SingleReview = ({ data }) => {
  const { userImage, name, textArea } = data;
  return (
    <div className="card w-60 lg:w-96 bg-base-100 shadow-xl mx-auto my-3">
      <div className="card-body">
        <h2 className="text-xl text-start flex items-center gap-2">
          <span>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={userImage} alt="" />
              </div>
            </div>
          </span>
          {name},
        </h2>
        <p className="text-md text-start font-light">{textArea}</p>
      </div>
    </div>
  );
};

export default SingleReview;
