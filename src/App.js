import "./App.css";
import NotFoundPage from "./pages/404page";
import Home from "./pages/Homepage";
import ANMpage from "./pages/ANMpage";
import AWpage from "./pages/AWSpage";
import CEHpage from "./pages/CEHpage";
import LTMTpage from "./pages/LTMTpage";
import Regpage from "./pages/Regpage";
import TKDHpage from "./pages/TKDHpage";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./pages/Navbar";
import Footer from "./pages/Footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/ANM" element={<ANMpage/>} />
        <Route path="/AWS" element={<AWpage/>} />
        <Route path="/CEH" element={<CEHpage/>} />
        <Route path="/LTMT" element={<LTMTpage/>} />
        <Route path="/Reg" element={<Regpage/>} />
        <Route path="/TKDH" element={<TKDHpage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
