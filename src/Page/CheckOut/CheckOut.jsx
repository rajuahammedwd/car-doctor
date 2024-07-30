import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, img,price } = service;
  const {user}=useContext(AuthContext)

  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value
    const email = user?.email
    const date = form.date.value
    const price = form.price.value;
    const checkOutData= {name,email,date,price}
    fetch("http://localhost:5000/order",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(checkOutData)
      
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert("Order Confirmed")
      }
    })
  }


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
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                name="name"
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
                defaultValue={user?.email}
                name="email"
                className="input"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                placeholder="Price"
                defaultValue={price}
                name="price"
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
