import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import Header from "../components/Header";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
function signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError("Password need to be the same");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      toast.success("Account Created!",{
        position: "bottom-center",
        autoClose: 3000,
      })
      setTimeout(() => Router.push("/market"), 2000)
   
      ;
    } catch (errorr) {
      console.log(errorr);
      setError(errorr.message);
      toast.error(errorr.message,{
        position: "bottom-center",
        autoClose: 5000,
      });
    }
    setLoading(false);
  }
  console.log(error);
  return (
    <div className="flex flex-col h-screen">
      <div className="absolute w-full">
        <Header />
      </div>
      
      <div className="flex items-center justify-center flex-grow px-4 bg-gray-50 sm:px-6 lg:px-8">
  
        <div className="w-full max-w-md space-y-8 ">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Sign Up with your email
            </h2>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <p>Your Email address</p>
              <div className="pb-2">
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <p>Your Password</p>
              <div className="pb-2">
                <input
                  ref={passwordRef}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <p>Confirm your password</p>
              <div>
                <input
                  ref={passwordConfRef}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="flex text-sm">
                <p className="pr-2">Already have an account? </p>
                <Link href="/login">
                  <a className="pr-1 font-medium text-blue-600 hover:text-blue-500">
                    Log in
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="w-5 h-5 text-blue-300 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default signup;
