import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        alt="image"
        src="/History-banner.jpg"
        width={100}
        height={100}
        style={{ width: "90%", maxHeight: "300px", objectFit: "cover" }}
      />
      <br></br>
      <h2 className="text-2xl">Featured</h2>
      <br></br>
      <div className="flex flex-wrap gap-5" style={{ width: "90%" }}>
        <div
          className="flex flex-col"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "350px",
            border: "1px solid black",
          }}
        >
          <Image
            alt="image"
            src="/History-banner.jpg"
            width={100}
            height={10}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderBottom: "1px solid black",
            }}
          />
          <div className=" flex flex-col p-5 gap-5">
            <h2 className="text-xl font-bold">History Topic</h2>
            <p className="text-lg">History description</p>
          </div>
        </div>

        <div
          className="flex flex-col"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "350px",
            border: "1px solid black",
          }}
        >
          <Image
            alt="image"
            src="/vercel.svg"
            width={100}
            height={10}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderBottom: "1px solid black",
            }}
          />
          <div className=" flex flex-col p-5 gap-5">
            <h2 className="text-xl font-bold">History Topic</h2>
            <p className="text-lg">History description</p>
          </div>
        </div>

        <div
          className="flex flex-col"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "350px",
            border: "1px solid black",
          }}
        >
          <Image
            alt="image"
            src="/vercel.svg"
            width={100}
            height={10}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderBottom: "1px solid black",
            }}
          />
          <div className=" flex flex-col p-5 gap-5">
            <h2 className="text-xl font-bold">History Topic</h2>
            <p className="text-lg">History description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
