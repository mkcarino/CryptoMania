import Link from "next/link";
import Router from "next/router";
import { useAuth } from "../contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function AuthButton() {
  const { user, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      setTimeout(() => Router.push("/"), 2000);
      toast.success("Logging out", {
        position: "bottom-center",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error, {
        position: "bottom-center",
        autoClose: 2000,
      });
      console.log(error);
    }
  }
  if (user === null) {
    return (
      <div>
        <Link href="/login">
          <h1 className="p-5 px-10 font-bold text-white bg-green-400 rounded-full whitespace-nowrap">
            Log In
          </h1>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="text-base">
        <ToastContainer />
        <div
          className="p-5 px-10 font-bold text-white bg-red-400 rounded-full whitespace-nowrap"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    );
  }
}

export default AuthButton;
