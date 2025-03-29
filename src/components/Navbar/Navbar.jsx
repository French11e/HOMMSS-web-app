import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../Assets/HOMMSS-LOGO.png";
import SignInModal from "../../Pages/Auth/SignInModal";
import RegisterModal from "../../Pages/Auth/RegisterModal";
import ForgotPassword from "../../Pages/Auth/ForgotPassword";

const navLinks = [
  { name: "Home", redirectTo: "/" },
  { name: "Products", redirectTo: "/products" },
  { name: "About Us", redirectTo: "/about" },
  { name: "Contact", redirectTo: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const closeNavbar = () => setMobileDrawerOpen(false); // Close menu when navigating or opening modal
  const openModal = (modal) => {
    setActiveModal(modal);
    closeNavbar(); // Ensures mobile menu closes
  };
  const closeModal = () => setActiveModal(null);

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
                      isActive
                        ? "text-blue-400 underline"
                        : "hover:text-blue-300 transition"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden lg:flex ml-auto space-x-3 items-center">
              <button
                onClick={() => openModal("signIn")}
                className="py-2 px-3 border rounded-md text-white border-[#5BC8F4] hover:bg-[#5BC8F4] hover:text-black transition duration-300"
              >
                Sign In
              </button>
              <button
                onClick={() => openModal("register")}
                className="bg-gradient-to-r from-[#0842c1] to-[#1e77da] py-2 px-3 rounded-md text-white hover:brightness-110 transition duration-300"
              >
                Create an Account
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex ml-auto">
              <button onClick={toggleNavbar} className="text-white">
                {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-black p-5 transition-transform duration-300 ease-in-out ${
              mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button onClick={toggleNavbar} className="text-white mb-4">
              <X size={24} />
            </button>
            <ul className="flex flex-col space-y-4 text-white text-lg font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.redirectTo}
                    onClick={closeNavbar} // Close mobile menu on click
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-400 underline"
                        : "hover:text-blue-300 transition"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openModal("signIn")}
                  className="w-full py-2 px-3 border rounded-md text-white border-[#5BC8F4] hover:bg-[#5BC8F4] hover:text-black transition duration-300"
                >
                  Sign In
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("register")}
                  className="w-full bg-gradient-to-r from-[#0842c1] to-[#1e77da] py-2 px-3 rounded-md text-white hover:opacity-80 transition duration-300"
                >
                  Create an Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {activeModal === "signIn" && (
        <SignInModal
          onClose={closeModal}
          onSwitch={() => openModal("register")}
          onForgotPassword={() => openModal("forgotPassword")}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          onClose={closeModal}
          onSwitch={() => openModal("signIn")}
        />
      )}
      {activeModal === "forgotPassword" && (
        <ForgotPassword onClose={closeModal} />
      )}
    </>
  );
}
