import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { siginUser, googleLogin } = use(AuthContext);

  const siginHandle = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    siginUser(email, password)
      .then((res) => {
        console.log(res?.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goggleHandle = (e) => {
    e.preventDefault();
    googleLogin()
    .then(res => {
      console.log(res?.user);

      const user = {
        name: res?.user?.displayName,
        email: res?.user?.email,
        image: res?.user?.photoURL
      }

      // save a database
      fetch('https://smart-deals-server-blond.vercel.app/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(result => result.json())
      .then(data => {
        console.log(data)
      })

    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-28">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold my-font">Welcome Back</h1>
          <p className="py-6">
            Sign in to continue your journey. Manage your account, explore new
            features, and more.
          </p>
        </div>
        <div className="w-full max-w-md backdrop-blur-lg fade-slide-up shadow-2xl rounded-2xl p-8">
          <form className="space-y-5" onSubmit={siginHandle}>
            <fieldset className="fieldset">
              <h2 className="text-2xl my-font font-semibold text-center pb-2">
                Sign In
              </h2>
              {/* email */}
              <label className="label text-white">Email</label>
              <input
                name="email"
                type="email"
                placeholder="example@email.com"
                className="input input-bordered w-full"
                required
              />

              {/* password */}
              <label className="label text-white">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
              <div>
                <a className="link link-hover opacity-65">Forgot password?</a>
              </div>
              <button className="btn border-none text-white bg-linear-to-r from-purple-500  to-pink-500 mt-4">
                Sign In
              </button>

              {/* multiple loing system */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-black"></div>
                <span className="text-sm text-black">or</span>
                <div className="h-px w-16 bg-black"></div>
              </div>

              {/* Google */}
              <button 
              onClick={goggleHandle}
              className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
          </form>
          <Link className="text-xs text-center mt-2 opacity-65" to="/register">
            Dont Have Account?{" "}
            <span className="cursor-pointer text-primary hover:underline">
              {" "}
              Please SignUp
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
