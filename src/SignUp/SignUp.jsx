import { Link } from "react-router-dom";
import SocialMediaLogin from "../components/SocialMediaLogin/SocialMediaLogin";
import img from "../assets/images/login/login.svg"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })

        form.reset();
    };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col lg:flex-row justify-between items-center px-20">
        <div className="text-center">
          <img src={img} alt="" />
        </div>
        <div className=" w-full max-w-sm shadow rounded bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white">
                Sign Up
              </button>
            </div>
          </form>
          <SocialMediaLogin></SocialMediaLogin>
          <div className="text-center my-5">
            <h2>
              Already have an account?
              <Link to={"/signIn"} className="text-orange-600">
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
