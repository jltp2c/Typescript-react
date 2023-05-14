
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Shop from './pages/Shop';
import Layout from "./components/Layout";

function App() {
   return (
    <div>
        <Layout/>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
 
    </div>
  );
}

export default App
