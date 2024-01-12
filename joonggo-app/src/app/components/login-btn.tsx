"use client";
// import { signIn } from "next-auth/react";

const Login: React.FC = () => {
  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("");
    // await signIn("google"); // Specify the provider you want to use (e.g., Google)
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
