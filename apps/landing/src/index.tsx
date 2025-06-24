import React from "react";
import ReactDOM from "react-dom/client";
import LandingRouter from "./router/LandingRouter";

import "../index.css"; // якщо є спільні стилі/tailwind

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LandingRouter />
  </React.StrictMode>
);
