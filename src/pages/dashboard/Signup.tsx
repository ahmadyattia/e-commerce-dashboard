import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  console.log(firstName);
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form className="w-[200px] max-w-full">
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex gap-1 justify-center m-3">
          <input type="checkbox" onChange={() => setIsAdmin((prev) => !prev)} />
          <label htmlFor="">Admin</label>
        </div>
        <button className="w-full p-0.75 rounded-[3px] border border-[#aee9f5] text-center cursor-pointer hover:border-[dodgerblue]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
