import Image from "next/image";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

export default function Home() {
  return (
    <BrowserRouter>
      <Header />
      <br></br>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
