import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const {createUser} = use(AuthContext);

  const signUpHandle = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    createUser(email, password)
    .then(res => {
      console.log(res?.user)
    })
    .catch(error => {
      console.log(error)
    })
  
    console.log({email, password, name, photo});
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center relative overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
        <div className="text-center">
          <h1 className="text-5xl my-font font-bold">Create Your Account!</h1>
          <p className="py-6">
            Join our community and unlock exclusive features. Your journey
            begins here!
          </p>
        </div>
        <div className="w-full signup-animate max-w-md backdrop-blur-lg shadow-2xl rounded-2xl p-8">
          <form onSubmit={signUpHandle}>
            <fieldset className="fieldset">
              <h2 className="text-2xl my-font font-semibold text-center text-white pb-2">
                Sign Up
              </h2>
              {/* name */}
              <label className="label pt-3">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="name"
                placeholder="Name"
                required
              />

              {/* email */}
              <label className="label pt-3">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full"
                required
              />

              {/* photo */}
              <label className="label pt-3">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo URL here"
                className="input input-bordered w-full"
                required
              />

              {/* password */}
              <label className="label pt-3">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />

              {/* btn */}
              <button className="btn border-none text-white bg-linear-to-r from-purple-500  to-blue-500 mt-4">
                SignUp
              </button>
            </fieldset>
          </form>
          <Link className="text-xs" to="/login">
            Alrady Have Account?{" "}
            <span className="text-primary cursor-pointer hover:underline">
              {" "}
              Please SignIn
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
