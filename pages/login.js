import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Router from "next/router";
import Header from "../components/Header";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      toast.success("Succesful login!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      setTimeout(() => Router.push("/portfolio"), 2000);
    } catch (errorr) {
      toast.error(errorr.message, {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
    setLoading(false);
  }
  return (
    <div className="flex flex-col h-screen">
      <div className="absolute w-full">
        <Header title="Login | CryptoMania" />
      </div>
      <div className="flex items-center justify-center flex-grow px-4 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 ">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Login to your account
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Or{" "}
              <Link href="/signup">
                <a className="font-medium text-blue-600 hover:text-blue-500">
                  Sign Up here
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  ref={passwordRef}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

             
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
                Login
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
export default Login;
