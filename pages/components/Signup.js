import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import zustandStore from "../../store/zustand";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const spin = zustandStore((state) => state.spin);
  const setSpin = zustandStore((state) => state.setSpin);

  const SignupHandler = async () => {
    setSpin(true);
    try {
      await axios
        .post("/api/signup", {
          username: username,
          email: email,
          password: password,
        })
        .then((res) => {
          toast.success("You have successfully signed up");
          setSpin(false);
          navigate("/signin");
        });
    } catch (err) {
      setSpin(false);
      toast.error("Same user exists. Please try again");
    }
  };
  return (
    <div className="flex w-full h-full justify-center">
      <Spinner />
      <div
        className="flex flex-col gap-4 w-2/5 p-5"
        style={{ backgroundColor: "gray", borderRadius: "20px" }}
      >
        <h1
          style={{ textAlign: "center", color: "white" }}
          className="text-2xl"
        >
          {" "}
          Sign Up
        </h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          style={{
            border: "none",
            textAlign: "center",
            borderRadius: "10px",
            height: "30px",
            outline: "none",
          }}
          placeholder="Username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          style={{
            border: "none",
            textAlign: "center",
            borderRadius: "10px",
            height: "30px",
          }}
          placeholder="Password"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          style={{
            border: "none",
            textAlign: "center",
            borderRadius: "10px",
            height: "30px",
          }}
          placeholder="Email"
        />
        <button
          onClick={SignupHandler}
          style={{
            border: "none",
            backgroundColor: "lightBlue",
            borderRadius: "20px",
            height: "40px",
            width: "100px",
            alignSelf: "center",
          }}
        >
          Submit
        </button>
        <Link
          to="/signin"
          style={{
            backgroundColor: "lightGray",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          Already Have an account. Click here to log in.
        </Link>
      </div>
    </div>
  );
};

export default Signup;
