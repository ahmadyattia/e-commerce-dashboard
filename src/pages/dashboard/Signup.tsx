import { api } from "@/services/api";
import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await api.post("/auth/signup", {
        fName,
        lName,
        email,
        password,
        isAdmin,
      });

      navigate("/dashboard/login");
    } catch (err: any) {
      setError(err.response.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSubmit} className="w-[200px] max-w-full">
        <div className="flex flex-col gap-0.5 mb-1">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            required
            className="border border-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
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
            className="border border-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
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
            className="border border-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
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
            className="border border-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex gap-1 justify-center m-3">
          <input type="checkbox" onChange={() => setIsAdmin((prev) => !prev)} />
          <label htmlFor="">Admin</label>
        </div>
        <button
          type="submit"
          className="w-full p-0.75 rounded-[3px]  bg-[#aee9f5] text-center cursor-pointer hover:border-[dodgerblue]"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
