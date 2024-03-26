import React, { useState, useEffect } from "react";
import { Suspense } from "react";
// import { BarLoader } from "react-spinners";
import Home from "./pages/Home";
import ToggleSwitch from "./components/toggleSwitch/toggle";
import Loader from "./components/loader/loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-theme", !isDarkMode);
    document.body.classList.toggle("light-theme", isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", !isDarkMode);
    document.body.classList.toggle("light-theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          {/* <BarLoader color="#6679F9" height={4} /> */}
          <Loader />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          {/* <BarLoader color="#6679F9" height={4} /> */}
          <Loader />
        </div>
      ) : (
        <div className="landing-page">
          <Home />
          <ToggleSwitch handleToggle={handleToggle} isDarkMode={isDarkMode} />
        </div>
      )}
    </Suspense>
  );
};

export default App;
