import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg"
import SocialMediaLogin from "../components/SocialMediaLogin/SocialMediaLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const SignIn = () => {
  const {signIn} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log("Login User",user);
        })
        .catch((error) => {
            console.log(error);
        })

        form.reset();
    }
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white">Login</button>
            </div>
          </form>
          <SocialMediaLogin></SocialMediaLogin>
          <div className="text-center my-5">
             <h2>Are you new here?<Link to={"/signUp"} className="text-orange-600">Sign Up</Link></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
