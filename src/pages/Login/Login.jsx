import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="flex justify-center items-center w-full h-screen">
      <img src={netflix_spinner} alt="" className="w-16"/>
    </div>
  ) : (
    <div className="min-h-screen login-radial-bg bg-no-repeat bg-center bg-cover py-4 px-[5%] sm:py-5 sm:px-[8%]">
      <img src={logo} alt="" className="w-40" />
      <div className="w-full max-w-md bg-black/75 p-5 sm:p-14 mt-7 sm:mt-0 my-0 mx-auto border rounded-md border-transparent">
        <h1 className="text-3xl font-medium mb-7">{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 px-5 mb-2 bg-[#333] text-white font-medium rounded-md focus:outline-none"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-5 my-2 bg-[#333] text-white font-medium rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
            className="w-full h-12 px-5 my-2 bg-[#333] text-white font-medium rounded-md focus:outline-none"
          />
          <button onClick={user_auth} type="submit" className="w-full h-12 bg-[#e50914] text-white font-medium rounded-md mt-2">
            {signState}
          </button>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2 mt-6">
              <input type="checkbox" id="remember-me" className="w-4 h-4"/>
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="mt-8 text-gray-500">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
                className="ml-2 text-white font-medium cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
                className="ml-2 text-white font-medium cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
