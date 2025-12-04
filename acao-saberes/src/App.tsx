import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";

export default function App() {
  const navbarRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar ref={navbarRef} />
      <main style={{ paddingTop: navbarHeight }} className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quemSomos" element={<QuemSomos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
