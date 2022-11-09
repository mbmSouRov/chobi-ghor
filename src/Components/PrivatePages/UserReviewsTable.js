import React, { useEffect, useState } from "react";

const UserReviewsTable = ({ data }) => {
  const { _id, service, email, textArea } = data;

  const [services, setServices] = useState("Undefined");

  useEffect(() => {
    fetch(`http://localhost:5000/service/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [service]);
  console.log(services._id);
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are your Sure You Want To Delete?");
    if (proceed) {
      fetch(`http://localhost:5000/allReview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Deleted"); //Modal a dekhano lagbe, kaj baki
          console.log(data);
        });
    }
  };

  return (
    <>
      <tr className="hover flex justify-center">
        <td className="w-1/2 text-start">{services.title}</td>
        <td className="w-full text-center">{textArea}</td>
        <td className="w-1/2 text-center">
          <div className="flex justify-end">
            <button className="btn btn-outline btn-primary mx-1">UPDATE</button>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="btn btn-outline btn-error mx-1"
            >
              DELETE
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserReviewsTable;
