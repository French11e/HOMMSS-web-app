import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar1 from "./components/Navbar/Navbar1";
import Shop from "./Pages/Shop";
import Homepage from "./Pages/Homepage";
import AboutPage from "./components/samples/AboutPage";

function App() {
  return (
    <>
      <Navbar1 />
        <Outlet />
      <AboutPage />
    </>
  );
}

export default App;
