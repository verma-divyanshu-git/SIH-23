import React from "react";
import { useState, useContext } from "react";
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
const register = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = async () => {
    if (isStrongPassword(password) && isValidEmail(email)) {
      console.log("ran");
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        body: JSON.stringify({
          emailAddress: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          contactNumber: contactnumber,
          organization: organization,
          // emailAddress: email,
        }),
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      localStorage.setItem("token", responseData.token);
      router.push("/");
      authContext.onLogin();
    }
  };

  return (
    <>
      <div className="bg-[url('/bg2.png')] bg-cover bg-white flex justify-center items-center h-screen w-screen border-2">
        {/* <h2 className="text-base font-semibold leading-7 text-black">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}
        <div className="border-2 border-gray-400 rounded-md p-8 w-1/2">
          <div className="font-bold text-black text-lg flex justify-center">
            Register
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Organization
              </label>
              <div className="mt-2">
                <input
                  id="organization"
                  name="organization"
                  onChange={(e) => {
                    setOrganization(e.target.value);
                  }}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Contact No.
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                  id="Contact"
                  name="contactnumber"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 flex justify-center items-center mt-8">
            <button
              className="text-white bg-black hover:black hover:scale-[1.05] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
