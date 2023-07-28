import "../styles/globals.css";
import Home from ".";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

export default function App({ Component, pageProps }) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? <Home /> : <Spinner />;
}
