import "./global.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Popup from "./components/Popup.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    // if (!hasSeenPopup) {
    //   setShowPopup(true);
    //   sessionStorage.setItem("hasSeenPopup", "true");
    // }
    setShowPopup(true);
    document.body.style.overflow = "hidden";
    setStartTyping(false);
  }, []);

  return (
    <>
      {showPopup && (
        <Popup
          onClose={() => {
            setShowPopup(false);
            document.body.style.overflow = "";
            setStartTyping(true);
          }}
        />
      )}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home startTyping={startTyping} setStartTyping={setStartTyping} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
