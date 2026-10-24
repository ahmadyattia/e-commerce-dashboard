import React from "react";
import menuIcon from "../../assets/icons/menu_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import { Link } from "react-router";
import { useAuth } from "@/context/AuthContext";
import { User } from "@/types/user";

interface TopbarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ setIsSidebarOpen }: TopbarProps) => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-end items-center gap-6">
      <div className="flex gap-4 items-center me-auto">
        <img
          onClick={() => setIsSidebarOpen(true)}
          src={menuIcon}
          className="w-8 cursor-pointer"
        />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {user && <Link to="signup">Signup</Link>}
      {!user && <Link to="login">Login</Link>}
      {user && (
        <p className="cursor-pointer" onClick={() => logout()}>
          Logout
        </p>
      )}
      {user && (
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm">{user?.first_name}</span>
        </div>
      )}
    </div>
  );
};

export default Topbar;
