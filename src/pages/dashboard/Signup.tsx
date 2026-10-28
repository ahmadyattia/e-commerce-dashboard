import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Signup = () => {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const { loading, signup } = useAuth();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setMessage("");
    setError(null);

    try {
      await signup(fName, lName, email, password, isAdmin);

      setMessage("User signed up successfully!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h1 className="text-2xl font-bold mb-4 text-[#aee9f5]">Signup</h1>

      <form onSubmit={handleSubmit} className="w-[200px] max-w-full">
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            required
            className="border border-[#aee9f5] rounded-[3px] p-1.5 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            required
            className="border border-[#aee9f5] rounded-[3px] p-1.5 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-[#aee9f5] rounded-[3px] p-1.5 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-[#aee9f5] rounded-[3px] p-1.5 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex gap-1 justify-center m-3">
          <input type="checkbox" onChange={() => setIsAdmin((prev) => !prev)} />
          <label htmlFor="">Admin</label>
        </div>
        <button
          type="submit"
          className="w-full p-1.5 rounded-[3px]  bg-[#aee9f5] text-center cursor-pointer hover:border-[dodgerblue]"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
