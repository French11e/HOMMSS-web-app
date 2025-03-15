import "../Navbar/Navbar.css";
import logo from "../Assets/HOMMSS-LOGO.png";
import cart from "../Assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="w-15" src={logo} alt="logo" />
        <span>HOMMSS</span>
      </div>
      <ul className="nav-menu">
        <li>
          Home
          <hr />
        </li>
        <li>Products</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center space-x-8 nav-login-cart">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Login
        </button>
        <img src={cart} alt="" className="w-8 h-8" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
