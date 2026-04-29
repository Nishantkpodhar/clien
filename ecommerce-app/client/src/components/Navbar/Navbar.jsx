import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <Link className="text-2xl font-bold text-violet-600" to="/">
        ShopVerse
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <FaShoppingCart size={22} />
        </Link>
        <Link
          className="bg-violet-600 text-white px-4 py-2 rounded-lg"
          to="/login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;