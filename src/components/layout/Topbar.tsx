import React from "react";
import closeIcon from "../../assets/icons/close_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import menuIcon from "../../assets/icons/menu_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";

interface TopbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isSidebarOpen, setIsSidebarOpen }: TopbarProps) => {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          src={isSidebarOpen ? closeIcon : menuIcon}
          className="w-8 cursor-pointer"
        />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
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
