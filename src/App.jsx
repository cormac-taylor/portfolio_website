import "./global.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header, Footer, Popup } from "./components/index.js";
import Home from "./pages/Home.jsx";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    const restoreScrollPosition = () => {
      const savedPosition = localStorage.getItem("scrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    restoreScrollPosition();

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  useEffect(() => {
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
