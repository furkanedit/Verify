import React from "react";
// import './App.css'
import AppRoutes from "./routes";

function App() {
  if (window.location.hostname !== "verified-badge.koyeb.app") {
    window.location.href = "https://google.com";
  }

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
