import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<HomePage />} />
        <Route path="/explore" element={<HomePage />} />
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
