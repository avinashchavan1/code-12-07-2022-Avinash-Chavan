import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
