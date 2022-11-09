import React from "react";

const AddServices = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const img = form.URL.value;

    const review = {
      name,
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
          form.reset();
          //modal dekhano lagbe
        }
      })
      .catch((er) => console.log(er));
  };

  return (
    <div>
      <p>Add Services page</p>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col justify-center items-center gap-2"
      >
        <input
          name="name"
          type="text"
          placeholder="Service Name"
          className="input input-bordered input-md w-full max-w-xs"
        />

        <input
          name="description"
          type="text"
          placeholder="Service Description"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <input
          name="price"
          type="text"
          placeholder="Service Price"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <input
          name="URL"
          type="text"
          placeholder="Service Thumb Image URL"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <button>Add Service</button>
      </form>
    </div>
  );
};

export default AddServices;
