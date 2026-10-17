import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form className="w-[200px] max-w-full">
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="bg-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex flex-col gap-0.5 mb-3">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            className="bg-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <button className="w-full p-0.75 rounded-[3px] border border-[#aee9f5] text-center cursor-pointer hover:border-[dodgerblue]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
