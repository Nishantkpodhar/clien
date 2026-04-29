import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.discountPrice * item.qty,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between bg-white p-5 rounded-xl shadow mb-4"
        >
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>₹{item.discountPrice}</p>
            <p>Qty: {item.qty}</p>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold">
          Total: ₹{total}
        </h2>

        <Link
          to="/checkout"
          className="inline-block mt-5 bg-violet-600 text-white px-8 py-3 rounded-xl"
        >
          Proceed To Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;