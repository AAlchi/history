import Image from "next/image";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import Signin from "./components/Signin";

export default function Home() {
  return (
    <BrowserRouter>
      <Toaster />
      <Header />
      <br></br>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
