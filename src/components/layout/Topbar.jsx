import React from "react";

const Topbar = () => {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">Ahmed</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
