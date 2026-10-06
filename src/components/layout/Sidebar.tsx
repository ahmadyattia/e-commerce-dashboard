import React from "react";
import { Link } from "react-router";
import { useState } from "react";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <div
      className={`bg-white shadow-md ${isSidebarOpen && "w-64 transition-all duration-300"} ${!isSidebarOpen && "w-0 overflow-hidden transition-all duration-300"}`}
    >
      <div className="flex justify-between">
        <div className="p-4 text-xl font-bold">Shop Site</div>
      </div>

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
