import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar/Navbar1";
import Shop from "./Pages/Shop";
import Homepage from "./Pages/Homepage";
import AboutPage from "./components/samples/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Homepage />
      <AboutPage />
    </>
  );
}

export default App;
