import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle auth state change on mount (including on page refresh)
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        // navigate("/");
        // If authenticated, stay on the page
        // Only navigate to login if user is not authenticated
      } else {
        console.log("Logged Out");
        navigate("/login"); // Navigate to login if not logged in
      }
    });
  }, [navigate]);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
};

export default App;
