
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './hayas/homepage/Homepage'
import Grocery from "./hayas/homepage/products/Grocery";
import Food from "./hayas/homepage/products/Food";

import './App.css'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Grocery" element={<Grocery />} />
          <Route path="/Food" element={<Food />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
