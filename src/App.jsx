import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Footer from "./components/Navbar/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
