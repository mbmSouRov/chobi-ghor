import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import SingleReview from "./SingleReview";

const SeeReview = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/allReviews?service=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [id]);

  return (
    <div className="my-2 gap-2">
      {reviews &&
        reviews.map((review) => (
          <SingleReview key={review._id} data={review}></SingleReview>
        ))}
    </div>
  );
};

export default SeeReview;
