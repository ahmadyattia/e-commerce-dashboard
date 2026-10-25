import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import { Outlet } from "react-router";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext.js";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-x-auto">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        <main className="p-6 overflow-y-auto">
          {(!user || !user.is_admin) && (
            <div className="w-full max-w-max mb-4 bg-red-500 text-white py-5 px-10 rounded-xl shadow-sm hover:shadow-md transition">
              <p>
                You must be logged in as an admin to access the site's data.
              </p>
            </div>
          )}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
