import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import UserReviewsTable from "./UserReviewsTable";

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userReviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, [user.email]);
  console.log(userReviews);
  return (
    <>
      <h1 className="my-10 text-3xl font-extralight text-primary">
        USER REVIEW SUMMARY
      </h1>

      {userReviews.length ? (
        <table className="table w-full">
          <thead>
            <tr className="flex justify-center">
              <th className="w-full text-left">Service Name</th>
              <th className="w-full text-center">Given Review</th>
              <th className="w-full text-right">Edit</th>
            </tr>
          </thead>
          <tbody>
            {userReviews.map((x) => (
              <UserReviewsTable key={x._id} data={x}></UserReviewsTable>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-4xl">No reviews were added ¯\_(ツ)_/¯</p>
      )}
    </>
  );
};

export default MyReviews;
