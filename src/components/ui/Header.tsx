import MobileSidebar from "./MobileSidebar";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <header>
      <Navbar />
      <ShoppingCart />
      <MobileSidebar />
    </header>
  );
};

export default Header;
