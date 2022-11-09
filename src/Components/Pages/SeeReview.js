import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const SeeReview = ({ id }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [reviews]);

  console.log(reviews);
  return (
    <div>
      <p>Now Showing Reviews</p>
      {/* {reviews.map((review) => (
        <SingleReview key={review._id}></SingleReview>
      ))} */}
      {reviews && (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-xl text-start">
              <span>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={reviews.userImage} alt="" />
                  </div>
                </div>
              </span>
              {reviews.name},
            </h2>
            <p className="text-xl text-start font-light">{reviews.textArea}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeReview;
