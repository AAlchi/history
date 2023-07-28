import React from "react";

const Header = () => {
  return (
    <header
      className="flex justify-evenly items-center gap-1 p-3"
      style={{ backgroundColor: "#64BBFF" }}
    >
      <h2 className="text-3xl font-bold">AA History</h2>

      <h3 className="text-sm text-center" style={{ width: "60%" }}>
        In this website you will be able to learn about your favorite topics in
        history!{" "}
      </h3>
      <a className="text-sm" href="">
        Sign up
      </a>
      <a className="text-sm" href="">
        Log in
      </a>
    </header>
  );
};

export default Header;
