import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  console.log(service);
  const { title, img } = service;

  return (
    <div className="my-10">
      <div
        className="bg-cover h-64 max-w-7xl mx-auto "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex justify-center items-center h-full bg-black bg-opacity-60">
          <h2 className="text-5xl font-bold text-white">
            Service : {title}
          </h2>
        </div>
      </div>
      <div className="max-w-4xl mx-auto my-5 bg-[#F3F3F3] p-10">
        <form>
          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                name="email"
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="input"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                placeholder="Mobile Number"
                name="number"
                className="input"
                required
              />
            </div>
            <div className="form-control ">
              <input
                type="text"
                placeholder="Your Message"
                name="number"
                className="input h-40 "
                required
              />
            </div>
          </div>
          <input
            type="submit"
            className="btn bg-[#FF3811] text-white btn-block"
            value="Confirm Order"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
