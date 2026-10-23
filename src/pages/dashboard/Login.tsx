import { api } from "@/services/api";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      await api.post("/auth/login", { email, password });
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
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <div className="flex flex-col gap-0.5 mb-3">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#aee9f5] rounded-[3px] p-0.75 focus:outline-[dodgerblue]"
          />
        </div>
        <button
          type="submit"
          className="w-full p-0.75 rounded-[3px] border border-[#aee9f5] text-center cursor-pointer hover:border-[dodgerblue]"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
