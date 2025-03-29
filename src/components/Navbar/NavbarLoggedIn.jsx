import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import logo from "../../Assets/HOMMSS-LOGO.png";

const navLinks = [
  { name: "Home", redirectTo: "/" },
  { name: "Products", redirectTo: "/products" },
  { name: "About Us", redirectTo: "/about" },
  { name: "Contact", redirectTo: "/contact" },
];

export default function NavbarLoggedIn() {
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const toggleProfileDropdown = () =>
    setProfileDropdownOpen(!profileDropdownOpen);
  const closeNavbar = () => setMobileDrawerOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img className="h-15 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight font-extrabold text-white">
                HOMMSS
              </span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex ml-auto space-x-12 items-center text-white text-lg font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.redirectTo}
                    className={({ isActive }) =>
                      isActive ? "text-blue-400" : ""
                    }
                  >
                    {link.name}
                  </NavLink>
                  {location.pathname === link.redirectTo && (
                    <hr className="border-none w-4/5 h-[3px] rounded-lg bg-[#5BC8F4]" />
                  )}
                </li>
              ))}
            </ul>

            {/* Icons for Logged-in User */}
            <div className="hidden lg:flex ml-auto space-x-6 items-center">
              {/* Cart Icon */}
              <NavLink to="/cart" className="text-white hover:text-blue-400">
                <ShoppingCart size={24} />
              </NavLink>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center text-white hover:text-blue-400"
                >
                  <User size={24} />
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-black border border-neutral-700 rounded-lg shadow-lg">
                    <ul className="text-white text-sm">
                      <li className="px-4 py-2 hover:bg-neutral-800">
                        <NavLink to="/profile">Profile</NavLink>
                      </li>
                      <li className="px-4 py-2 hover:bg-neutral-800">
                        <button>Logout</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex ml-auto">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileDrawerOpen && (
            <div className="lg:hidden mt-4">
              <ul className="flex flex-col space-y-4 text-white text-lg font-medium">
                {navLinks.map((link, index) => (
                  <li key={index} className="cursor-pointer">
                    <NavLink
                      to={link.redirectTo}
                      className={({ isActive }) =>
                        isActive ? "text-blue-400" : ""
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                {/* Cart Icon */}
                <li>
                  <NavLink
                    to="/cart"
                    className="flex items-center text-white hover:text-blue-400"
                  >
                    <ShoppingCart size={24} className="mr-2" />
                    Cart
                  </NavLink>
                </li>
                {/* Profile Button */}
                <li>
                  <NavLink
                    to="/profile"
                    className="flex items-center text-white hover:text-blue-400"
                  >
                    <User size={24} className="mr-2" />
                    Profile
                  </NavLink>
                </li>
                {/* Logout Button */}
                <li>
                  <button className="text-white hover:text-blue-400">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
