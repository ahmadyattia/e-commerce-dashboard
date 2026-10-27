import React from "react";
import menuIcon from "../../assets/icons/menu_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import { Link } from "react-router";
import { useAuth } from "@/context/AuthContext";
import { User } from "@/types/user";

interface TopbarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ setIsSidebarOpen }: TopbarProps) => {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-end items-center gap-6">
      <div className="flex gap-4 items-center me-auto">
        <img
          onClick={() => setIsSidebarOpen(true)}
          src={menuIcon}
          className="w-8 cursor-pointer"
        />
        <div className="self-start">
          <h1 className="text-2xl font-bold">Shop Site</h1>
          <p className="text-[8px]">dashboard</p>
        </div>
      </div>

      {!user && <Link to="login">Login</Link>}

      {user && (
        <div className="flex items-center gap-3">
          <span className="text-sm">{user?.first_name}</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default Topbar;
