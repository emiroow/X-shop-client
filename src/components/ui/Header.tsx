import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <header>
      <Navbar />
      <ShoppingCart />
      <MobileNavbar />
    </header>
  );
};

export default Header;
