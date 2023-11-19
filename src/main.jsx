import React from "react";
import ReactDOM from "react-dom"; // Fix the import here
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

AOS.init({
  offset: 0,
  duration: 1000,
});
