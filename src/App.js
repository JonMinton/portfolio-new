import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Whoops404 from "./pages/Whoops404";
import EmpEd from "./pages/EmpEd";
import Outputs from "./pages/Outputs";
import OtherApps from "./pages/OtherApps";


function App() {
  const [title, setTitle] = useState();
  const [firstView, setFirstView] = useState(true);

  useEffect(() => {
    setTitle("Jon Minton's Website");
  }, []);


  useEffect(() => {
    // set 5 second delay
    setTimeout(() => {
      setFirstView(false);
    }, 5000);
  }, [])


  return (
    <div className="App">
      <Header title = {title} />
      <Routes>
        <Route path="/" element={<Home firstView={firstView}/>} />
        <Route path="/history" element={<EmpEd />} />
        <Route path="/outputs" element={<Outputs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apps" element={<OtherApps />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
