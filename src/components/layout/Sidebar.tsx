import React from "react";
import { Link } from "react-router";
import closeIcon from "../../assets/icons/close_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  return (
    <div
      className={`bg-white shadow-md w-64 h-full transition-all duration-300 fixed top-0 left-0 ${!isSidebarOpen && "-translate-x-full"}`}
    >
      <img
        onClick={() => setIsSidebarOpen(false)}
        src={closeIcon}
        className="absolute right-0 w-8 cursor-pointer ml-auto my-4 mx-6"
      />
      <div className="p-4 text-xl font-bold">Shop Site</div>

      <nav className="flex flex-col gap-2 px-4">
        <Link
          to="/dashboard/overview"
          className="py-2 rounded hover:bg-gray-100"
        >
          Overview
        </Link>

        <Link
          to="/dashboard/products"
          className="py-2 rounded hover:bg-gray-100"
        >
          Products
        </Link>

        <Link to="/dashboard/orders" className="py-2 rounded hover:bg-gray-100">
          Orders
        </Link>

        <Link to="/dashboard/users" className="py-2 rounded hover:bg-gray-100">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
