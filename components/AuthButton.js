import Link from "next/link";
import Router from "next/router";
import { useAuth } from "../contexts/AuthContext";

function AuthButton() {
  const { user, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      setTimeout(() => Router.push("/"), 2000);
    } catch (error) {
      console.log(error);
    }
  }
  if (user === null) {
    return (
      <Link href="/login">
        <h1 className="p-5 px-10 font-bold text-white bg-green-400 rounded-full whitespace-nowrap">
          Log In
        </h1>
      </Link>
    );
  } else {
    return (
      <div
        className="p-5 px-10 font-bold text-white bg-red-400 rounded-full whitespace-nowrap"
        onClick={handleLogout}
      >
        Logout
      </div>
    );
  }
}

export default AuthButton;
