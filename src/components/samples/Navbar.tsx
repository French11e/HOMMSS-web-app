import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../Assets/HOMMSS-LOGO.png";
import { navItems } from "../constants";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-15 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight font-extrabold text-white">
              HOMMSS
            </span>
          </div>
          <ul className="hidden lg:flex ml-auto space-x-12 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => handleTabClick(item.label)}
                  className={
                    activeTab === item.label
                      ? "text-blue-500 font-bold"
                      : "text-white hover:text-blue-300"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex ml-auto space-x-3 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-[#0842c1] to-[#1e77da] py-2 px-3 rounded-md"
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

        {/* Mobile menu for small screens */}
        {mobileDrawerOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => handleTabClick(item.label)}
                    className={
                      activeTab === item.label
                        ? "block py-2 px-3 border-b border-neutral-700/80 text-blue-500 font-bold"
                        : "block py-2 px-3 border-b border-neutral-700/80 text-white hover:text-blue-300"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#0842c1] to-[#1e77da] py-2 px-3 rounded-md"
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

export default NavBar;
