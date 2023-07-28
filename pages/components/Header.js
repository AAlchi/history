import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="flex justify-evenly items-center gap-1 p-3"
      style={{ backgroundColor: "#64BBFF" }}
    >
      <Link to="/" className="text-3xl font-bold" style={{ color: "black" }}>
        AA History
      </Link>

      <h3 className="text-sm text-center" style={{ width: "60%" }}>
        In this website you will be able to learn about your favorite topics in
        history!{" "}
      </h3>
      <Link className="text-sm" to="/signup">
        Sign up
      </Link>
      <Link className="text-sm" to="/signin">
        Log in
      </Link>
    </header>
  );
};

export default Header;
