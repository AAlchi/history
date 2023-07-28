import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const SignupHandler = async () => {
    try {
      axios
        .post("/api/signup", {
          username: username,
          email: email,
          password: password,
        })
        .then((res) => {
          toast.success("You have successfully signed up");

          console.log(res.data);
        });
    } catch (err) {
      toast.error("Something happened. Please try again later");
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
        <button
          style={{
            backgroundColor: "lightGray",
            borderRadius: "10px",
          }}
        >
          Already Have an account. Click here to log in.
        </button>
      </div>
    </div>
  );
};

export default Signup;
