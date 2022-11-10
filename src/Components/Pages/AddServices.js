import React from "react";
import useTitle from "../../hooks/useTitle";
import toast, { Toaster } from "react-hot-toast";
const AddServices = () => {
  useTitle("Add Service");
  const toast1 = () => {
    toast.success("Successfully Added!");
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const img = form.URL.value;

    const review = {
      title,
      description,
      price,
      img,
    };

    fetch("http://localhost:5000/service", {
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
          // toast();
          form.reset();
        }
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className="my-10">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col justify-center items-center gap-2"
      >
        <input
          name="name"
          type="text"
          placeholder="Service Name"
          className="input input-bordered input-md w-full max-w-xs"
          required
        />

        <input
          name="description"
          type="text"
          placeholder="Service Description"
          className="input input-bordered input-md w-full max-w-xs"
          required
        />
        <input
          name="price"
          type="text"
          placeholder="Service Price"
          className="input input-bordered input-md w-full max-w-xs"
          required
        />
        <input
          name="URL"
          type="text"
          placeholder="Service Thumb Image URL"
          className="input input-bordered input-md w-full max-w-xs"
          required
        />
        <button onClick={toast1} className="btn btn-outline">
          Add Service
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default AddServices;
