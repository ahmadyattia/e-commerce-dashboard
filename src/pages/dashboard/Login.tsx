import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const { loading, login } = useAuth();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="m-4">
        <h1 className="text-2xl font-bold">Shop Site</h1>
        <p className="text-[8px]">dashboard</p>
      </div>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="text-2xl font-bold mb-4 text-[#aee9f5]">Login</h1>
        <form onSubmit={handleSubmit} className="w-[200px] max-w-full">
          <div className="flex flex-col gap-0.5 mb-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#aee9f5] rounded-[3px] p-1.5 focus:outline-[dodgerblue]"
            />
          </div>
          <div className="flex flex-col gap-0.5 mb-3">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#aee9f5] rounded-[3px] p-1.5 focus:outline-[dodgerblue]"
            />
          </div>
          <button
            type="submit"
            className="w-full p-1.5 rounded-[3px] bg-[#aee9f5] text-center cursor-pointer hover:border-[dodgerblue]"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
