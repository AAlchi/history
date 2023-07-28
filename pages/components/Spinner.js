import React from "react";
import { ClipLoader } from "react-spinners";
import zustandStore from "../../store/zustand";

const Spinner = () => {
  const spin = zustandStore((state) => state.spin);
  const setSpin = zustandStore((state) => state.setSpin);

  return (
    <>
      {spin && (
        <div
          style={{ zIndex: "2000" }}
          className="absolute top-0 flex w-full h-full opacity-80 bg-black items-center justify-center"
        >
          <ClipLoader
            color="gray"
            loading={spin}
            size={100}
            aria-label="Working on it"
          />
        </div>
      )}
    </>
  );
};

export default Spinner;
