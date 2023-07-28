import Image from "next/image";
import React from "react";
import data from "../data/data";
import Spinner from "./Spinner";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <Spinner />
      <Image
        alt="image"
        src="/History-banner.jpg"
        width={100}
        height={100}
        style={{ width: "90%", height: "300px", objectFit: "cover" }}
      />
      <br></br>
      <h2 className="text-2xl">Featured</h2>
      <br></br>
      <div className="flex flex-wrap gap-5" style={{ width: "90%" }}>
        {data.featured.map((data) => (
          <div
            className="flex flex-col lg:w-2/5 w-full"
            style={{
              height: "350px",
              border: "1px solid black",
            }}
          >
            <>
              <Image
                alt="image"
                src={data.image}
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
                <h2 className="text-xl font-bold">{data.title}</h2>
                <p className="text-lg">{data.desc}</p>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
