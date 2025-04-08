import { useState } from "react";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import MainMenu from "./pages/MainMenu";

export default function App() {
  const [page, setPage] = useState("home");

  if (page === "survey") return <Survey onComplete={() => setPage("main")} />;
  if (page === "main") return <MainMenu />;

  return <Home onStart={() => setPage("survey")} />;
}
