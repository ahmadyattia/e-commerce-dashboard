import React, { useRef } from "react";
import { Link } from "react-router";
import closeIcon from "../../assets/icons/close_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import useClickOutside from "@/hooks/useClickOutside";
import { useAuth } from "@/context/AuthContext";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  // close menu when user clicks away
  const sidebarRef = useRef(null);
  useClickOutside(setIsSidebarOpen, sidebarRef);
  const { user, logout } = useAuth();

  return (
    <div
      ref={sidebarRef}
      className={`bg-white shadow-md w-64 h-full transition-all duration-300 fixed top-0 left-0 ${!isSidebarOpen && "-translate-x-full"} z-999`}
    >
      <img
        onClick={() => setIsSidebarOpen(false)}
        src={closeIcon}
        className="absolute right-0 w-8 cursor-pointer ml-auto my-4 mx-6"
      />
      <div className="m-4">
        <h1 className="text-2xl font-bold">Shop Site</h1>
        <p className="text-[0.60rem]">dashboard</p>
      </div>

      <nav className="flex flex-col gap-2 px-4">
        <Link
          to="/dashboard/overview"
          className="py-2 rounded hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(false)}
        >
          Overview
        </Link>

        <Link
          to="/dashboard/products"
          className="py-2 rounded hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(false)}
        >
          Products
        </Link>

        <Link
          to="/dashboard/orders"
          className="py-2 rounded hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(false)}
        >
          Orders
        </Link>

        <Link
          to="/dashboard/users"
          className="py-2 rounded hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(false)}
        >
          Users
        </Link>
        <hr />
        {user && (
          <Link
            to="/dashboard/signup"
            className="py-2 rounded hover:bg-gray-100"
            onClick={() => setIsSidebarOpen(false)}
          >
            Signup
          </Link>
        )}
        {user && (
          <p
            className="py-2 rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => logout()}
          >
            Logout
          </p>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
