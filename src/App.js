import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Whoops404 from "./pages/Whoops404";

import EmpEd from "./pages/EmpEd";
import Outputs from "./pages/Outputs";

// import Float from "./components/Float";
// import Column from "./components/Column";
// import Position from "./components/Position";
// import SectionPosition from "./components/SectionPosition";

function App() {
  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle("Jon Minton's Website");
  }, []);
    
  return (
    <div className="App">
      <Header title = {title} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<EmpEd />} />
        <Route path="/outputs" element={<Outputs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
