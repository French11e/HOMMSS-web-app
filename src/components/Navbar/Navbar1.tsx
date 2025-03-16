import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../Assets/HOMMSS-LOGO.png";

const navLinks = [
  {
    name: "Home",
    redirectTo: "/"
  },
  {
    name: "Products",
    redirectTo: "/products"
  },
  {
    name: "About Us",
    redirectTo: "/about"
  },

  {
    name: "Contact",
    redirectTo: "/contact"
  }
]

const Navbar1 = () => {

  const [menu, setMenu] = useState("home");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-15 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight font-extrabold text-white">
              HOMMSS
            </span>
          </div>
          <ul className="hidden lg:flex ml-auto space-x-12 items-center text-white text-lg font-medium">
            {
              navLinks.map((links, index) => {
                return <li
                  onClick={() => {
                    setMenu(links.name.toLowerCase())
                  }}> 
                  <NavLink to={links.redirectTo} className={(isActive) => isActive ? "active" : "" } key={index}> {links.name} </NavLink>


                  {menu === links.name.toLowerCase() ? (
                    <hr className="border-none w-4/5 h-[3px] rounded-lg bg-[#5BC8F4]" />
                  ) : (
                    <></>
                  )}
                </li>
              })
            }
          </ul>
          <div className="hidden lg:flex ml-auto space-x-3 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md text-white border-[#5BC8F4]"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-[#0842c1] to-[#1e77da] py-2 px-3 rounded-md text-white"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden flex ml-auto">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-4 text-white text-lg font-medium">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact</li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md text-[#0439BB] border-[#5BC8F4]"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#0842c1] to-[#1e77da] py-2 px-3 rounded-md text-white"
                >
                  Create an Account
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar1;
