import img from "../../assets/images/products/1.png";

const OurProducts = () => {
  return (
    <div className="my-8  max-w-7xl mx-auto">
      <div className="space-y-3 text-center">
        <p className="text-[#FF3811] font-bold">Products</p>
        <h1 className="text-3xl font-bold">Browse Our Products</h1>
        <p className="capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {/* Card */}
        <div className="w-96 bg-base-100 shadow rounded p-3 ">
          <div>
            <img src={img} className="rounded bg-slate-100" alt="" />
          </div>
          <div className="text-center">
            <h2 className="mt-2">Electrical System</h2>
            <p className="text-[#FF3811]">Price : $ 200</p>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default OurProducts;
