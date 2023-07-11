import "@/styles/globals.css";
import Home from ".";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? <Home /> : <div>Loading...</div>;
}
