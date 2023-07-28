import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignupHandler = async () => {
    try {
      await axios
        .post("/api/signin", {
          username: username,
          password: password,
        })
        .then((res) => {
          toast.success("You are signed in");
          navigate("/");
          console.log(res.data);
        });
    } catch (err) {
      toast.error("Wrong username or password. Please try again");
    }
  };
  return (
    <div className="flex w-full h-full justify-center">
      <div
        className="flex flex-col gap-4 w-2/5 p-5"
        style={{ backgroundColor: "gray", borderRadius: "20px" }}
      >
        <h1
          style={{ textAlign: "center", color: "white" }}
          className="text-2xl"
        >
          {" "}
          Log In
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
          to="/signup"
          style={{
            backgroundColor: "lightGray",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          No account? Click here to sign up.
        </Link>
      </div>
    </div>
  );
};

export default Signin;
