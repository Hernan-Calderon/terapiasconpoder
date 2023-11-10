import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Conferences from "./components/Conferences";
import Therapies from "./components/Therapies";
import ClubSalud from "./components/ClubSalud";
import Gallery from "./components/Gallery";
import Testimonios from "./components/Testimonios";
import Contact from "./components/Contact";
import Data from "./components/Data";

import SocialButtons from "./components/SocialButtons";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremi" element={<AboutMe />} />
        <Route path="/conferencias" element={<Conferences />} />
        <Route path="/club-de-la-salud" element={<ClubSalud />} />
        <Route path="/terapias" element={<Therapies />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/tratamiento-de-datos" element={<Data />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>

      <Footer />
      <SocialButtons />
    </BrowserRouter>
  );
}

export default App;
