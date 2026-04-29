import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { addWishlist } from "../../redux/wishlistSlice";
import { FaHeart } from "react-icons/fa";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Link to={`/products/${product.slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-cover"
        />

        <div className="p-5">
          <h3 className="font-semibold">{product.title}</h3>

          <p className="text-gray-500">{product.brand}</p>

          <div className="flex justify-between mt-3">
            <span className="text-violet-600 font-bold">
              ₹{product.discountPrice}
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addWishlist(product));
              }}
            >
              <FaHeart className="text-red-500" />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart(product));
            }}
            className="w-full mt-4 bg-violet-600 text-white py-2 rounded-xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;