import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import UserReviewsTable from "./UserReviewsTable";

const MyReviews = () => {
  useTitle("My Review");
  const { user, signOut } = useContext(AuthContext);

  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userReviews?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut();
        }
        return res.json();
      })
      .then((data) => {
        // console.log("received", data);
        setUserReviews(data);
      });
  }, [user.email, signOut]);
  // console.log(userReviews);
  return (
    <>
      <h1 className="my-10 text-3xl font-extralight text-primary">
        USER REVIEW SUMMARY
      </h1>
      <div className="overflow-x-auto">
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
      </div>
    </>
  );
};

export default MyReviews;
