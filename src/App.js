import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RadioLook from "./Components/RadioLook/RadioLook";
import Header from "./Header/Header";
import PRadio from "./Components/pRadio/PRadio";
import AboutUs from "./Components/AboutUs/AboutUs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<RadioLook />} />
          <Route exact path="/pRadio" element={<PRadio />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
