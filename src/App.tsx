import './App.css'
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Shop from './pages/Shop';

function App() {
   return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
    </div>
  );
}

export default App
