import { useAuth } from "@/context/AuthContext.js";
import cancelIcon from "@/assets/icons/cancel_20dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";
import { useState } from "react";

const MustLoginMessage = () => {
  const { user } = useAuth();
  const [cancelMessage, setCancelMessage] = useState(false);

  return (
    <div className={`${cancelMessage && "hidden"}`}>
      {(!user || !user.is_admin) && (
        <div className="w-full max-w-max mb-4 bg-red-500 text-white py-5 px-10 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
          <p>You must be logged in as an admin to access the site's data.</p>
          <img
            src={cancelIcon}
            onClick={() => setCancelMessage(true)}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default MustLoginMessage;
