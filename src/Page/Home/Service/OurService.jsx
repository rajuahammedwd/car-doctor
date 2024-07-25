import { useEffect, useState } from "react";
import Service from "./Service";



const OurService = () => {
 const [services,setServices]=useState(null)

  useEffect(()=>{
      fetch("http://localhost:5000/services")
      .then(res=>res.json())
      .then(data=>{
        setServices(data)
      })
  },[])
  return (
    <div className="my-8  max-w-7xl mx-auto">
     <div className="space-y-3 text-center">
     <p className="text-[#FF3811] font-bold">Service</p>
      <h1 className="text-3xl font-bold">Our Service Area</h1>
      <p className="capitalize">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
       
       {services?.map(service=><Service key={service._id} service={service}></Service>)}
        
     </div>

    </div>
  );
};

export default OurService;
