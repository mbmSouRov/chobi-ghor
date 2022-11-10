import React, { useEffect, useState } from "react";

const UserReviewsTable = ({ data }) => {
  const { _id, service, textArea } = data;

  const [services, setServices] = useState("Undefined");

  useEffect(() => {
    fetch(`http://localhost:5000/service/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [service]);
  // console.log(services._id);
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

  let [textAreas, setTextAreas] = useState(textArea);

  const [id1, setId1] = useState(null);
  console.log("Set ID", id1);

  const handleUpdate = (id) => {
    console.log("Actual id", id);
    setId1(id);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let newTextAreas = form.textArea.value;
    setTextAreas(newTextAreas);
    const x = id1;
    console.log("Funtion er niche id paitesi", x);
    fetch(`http://localhost:5000/allReview/${id1}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ textArea: newTextAreas }),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        console.log(data);
      });
  };

  return (
    <>
      <tr className="hover flex justify-center">
        <td className="w-1/2 text-start">{services.title}</td>
        <td className="w-full text-center">{textArea}</td>
        <td className="w-1/2 text-center">
          <div className="flex justify-end">
            <a
              href={"#my-modal-2"}
              onClick={() => {
                handleUpdate(_id);
              }}
              className="btn btn-outline btn-primary mx-1 "
            >
              UPDATE
            </a>

            <div className="modal" id="my-modal-2">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Update your Review</h3>
                {
                  <form onSubmit={handleOnSubmit}>
                    <input
                      name="textArea"
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-success w-full max-w-xs"
                    />
                    <button className="btn btn-outline">UPDATE</button>
                  </form>
                }

                <div className="modal-action">
                  <a href="/myreviews" className="btn">
                    Close
                  </a>
                </div>
              </div>
            </div>
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
