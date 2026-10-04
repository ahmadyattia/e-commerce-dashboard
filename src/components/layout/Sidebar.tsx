import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6 text-xl font-bold">MyStore</div>

      <nav className="flex flex-col gap-2 px-4">
        <Link
          to="/dashboard/overview"
          className="p-2 rounded hover:bg-gray-100"
        >
          Overview
        </Link>

        <Link
          to="/dashboard/products"
          className="p-2 rounded hover:bg-gray-100"
        >
          Products
        </Link>

        <Link to="/dashboard/orders" className="p-2 rounded hover:bg-gray-100">
          Orders
        </Link>

        <Link to="/dashboard/users" className="p-2 rounded hover:bg-gray-100">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
