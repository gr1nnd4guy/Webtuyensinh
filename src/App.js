import "./App.css";
import NotFoundPage from "./pages/404page";
import Home from "./pages/Homepage";
import ANM from "./pages/ANMpage";
import AWS from "./pages/AWSpage";
import CEH from "./pages/CEHpage";
import LTW from "./pages/LTMTpage";
import Reg from "./pages/Regpage";
import TKDH from "./pages/TKDHpage";
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
        <Route path="/ANM" element={<ANM/>} />
        <Route path="/AWS" element={<AWS/>} />
        <Route path="/CEH" element={<CEH/>} />
        <Route path="/LTMT" element={<LTW/>} />
        <Route path="/Reg" element={<Reg/>} />
        <Route path="/TKDH" element={<TKDH/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
