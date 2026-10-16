import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" />
      </form>
    </div>
  );
};

export default Login;
