import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PatientHistory from "./components/json-server/PatientHistory";

function App() {
  return (
    <>
      <PatientHistory />
    </>
  );
}

export default App;
