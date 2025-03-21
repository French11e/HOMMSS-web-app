import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../Assets/HOMMSS-LOGO.png";
import SignInModal from "../../Pages/SignInModal";
import RegisterModal from "../../Pages/RegisterModal";

const navLinks = [
  { name: "Home", redirectTo: "/" },
  { name: "Products", redirectTo: "/products" },
  { name: "About Us", redirectTo: "/about" },
  { name: "Contact", redirectTo: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'signIn' | 'register' | null

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const openSignIn = () => setActiveModal("signIn");
  const openRegister = () => setActiveModal("register");
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

            {/* Auth Buttons */}
            <div className="hidden lg:flex ml-auto space-x-3 items-center">
              <button
                onClick={openSignIn}
                className="py-2 px-3 border rounded-md text-white border-[#5BC8F4]"
              >
                Sign In
              </button>
              <button
                onClick={openRegister}
                className="bg-gradient-to-r from-[#0842c1] to-[#1e77da] py-2 px-3 rounded-md text-white"
              >
                Create an Account
              </button>
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
                <li>
                  <button
                    onClick={openSignIn}
                    className="py-2 px-3 border rounded-md text-[#0439BB] border-[#5BC8F4]"
                  >
                    Sign In
                  </button>
                </li>
                <li>
                  <button
                    onClick={openRegister}
                    className="bg-gradient-to-r from-[#0842c1] to-[#1e77da] py-2 px-3 rounded-md text-white"
                  >
                    Create an Account
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      {activeModal === "signIn" && (
        <SignInModal onClose={closeModal} onSwitch={openRegister} />
      )}
      {activeModal === "register" && (
        <RegisterModal onClose={closeModal} onSwitch={openSignIn} />
      )}
    </>
  );
}
