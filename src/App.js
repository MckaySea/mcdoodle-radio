import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RadioLook from "./Components/RadioLook/RadioLook";
import Header from "./Header/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/radio" element={<RadioLook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
