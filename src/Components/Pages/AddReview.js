import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddReview = ({ id }) => {
  const { user } = useContext(AuthContext);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName || "not found";
    const email = user?.email || "unregistered";
    const serviceId = form.serviceId.value;
    const textArea = form.textArea.value;
    const userImage = user?.photoURL;

    const review = {
      service: id,
      name,
      email,
      serviceId,
      textArea,
      userImage,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <p>Please Add reviews</p>
      {user ? (
        <form onSubmit={handleOnSubmit} className="border-2 border-slate-400">
          <div className="grid grid-cols-1 justify-items-center">
            <div className="flex">
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                placeholder="Enter Your Name: "
                className="input input-bordered input-xs w-full max-w-xs my-1"
                readOnly
              />
              <input
                name="email"
                type="text"
                defaultValue={user?.email}
                placeholder="Enter Your Email: "
                className="input input-bordered input-xs w-full max-w-xs my-1"
                readOnly
              />
              <input
                name="serviceId"
                type="text"
                defaultValue={id}
                placeholder="Service ID"
                className="input input-bordered input-xs w-full max-w-xs my-1"
                readOnly
              />
            </div>
            <textarea
              name="textArea"
              className="textarea textarea-success w-full"
              placeholder="Write Review Here"
            ></textarea>
            <button className="btn btn-outline my-2">Add Review</button>
          </div>
        </form>
      ) : (
        <button className="btn glass text-primary">
          <Link to={"/login"}>Please Login To Add Review</Link>
        </button>
      )}
    </div>
  );
};

export default AddReview;
