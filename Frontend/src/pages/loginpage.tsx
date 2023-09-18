import React, { useContext, useState } from "react";
// import 'tw-elements';
import { TEInput, TERipple } from "tw-elements";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import AuthContext from "../../context/context";
function isValidEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

function isStrongPassword(password: string): boolean {
  // Regular expressions to check for specific conditions
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  // Check all conditions
  return (
    hasSpecialChar &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    password.length >= 8
  );
}

const loginpage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const submitHandler = async () => {
  
    if (isStrongPassword(password) && isValidEmail(email)) {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        body: JSON.stringify({
          emailAddress: email,
          password: password,
        }),
        credentials:"include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      localStorage.setItem('token',responseData.token);
      router.push('/mainpage');
      authContext.onLogin();
    }
  };
  return (
    <>
      <div className="bg-[url('/bg.png')] h-screen w-full flex justify-center items-center">
        <div className="flex justify-center items-center w-[1100px] h-[700px] bg-white p-12">
          <div className="hidden lg:flex w-1/2 relative items-center justify-center">
            <img
              src="/login.png"
              style={{ width: "500px", height: "500px" }}
              alt=""
            />
          </div>
          <div className="flex w-full h-screen items-center justify-center lg:w-1/2">
            <div className=" bg-gray-50 px-20 py-24 border">
              <div className="flex justify-center items-center">
                <h1 className="text-2xl font-semibold text-black">
                  Sign in With
                  <button className="ml-2 rounded-full p-2 hover:scale-[1.05] bg-white border border-gray-500">
                    <FcGoogle />
                  </button>
                  <button className="ml-2 rounded-full p-2 hover:scale-[1.05] bg-[#1450A3] text-white">
                    <FaLinkedinIn />
                  </button>
                  <button className="ml-2 rounded-full p-2 hover:scale-[1.05] bg-blue-400 text-white">
                    <FaTwitter />
                  </button>
                </h1>
              </div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-black">
                  Or
                </p>
              </div>

              <div className="flex flex-col gap-8 items-center">
                <div className="w-72 mt-2">
                  <Input
                    type="email"
                    className="text-black p-5"
                    crossOrigin=""
                    placeholder="Email Address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  
                  />
                </div>
                {/* <div className="mx-10 text-lg"> */}
                <div className="w-72">
                  <Input
                    type="email"
                    className="text-black p-5"
                    crossOrigin=""
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                {/* </div> */}
              </div>
              <div className="mt-6 mb-6 flex items-center justify-between text-black">
                {/* <!-- Remember me checkbox --> */}
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  {/* <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                  /> */}
                  {/* <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer text-black"
                  >
                    Remember me
                  </label> */}
                  {/* <Checkbox className="-mb-1" crossOrigin="" label="Remember Me" /> */}
                </div>

                {/* <!--Forgot password link--> */}
                <a href="#!">Forgot password?</a>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={submitHandler}
                  className="text-white py-3 px-8 flex justify-center items-center rounded-md border-2 hover:border-blue-700 border-transparent bg-blue-600 font-bold"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center items-center">
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-black">
                  Don't have an account?{" "}
                  <a href="/register" className="text-red-700 ">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loginpage;
