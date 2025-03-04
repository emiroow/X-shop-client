import MobileNavbar from "../ui/MobileNavbar";
import Navbar from "../ui/Navbar";
import ShoppingCart from "../ui/ShoppingCart";

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
