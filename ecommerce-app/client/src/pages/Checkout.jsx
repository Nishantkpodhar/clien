import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { placeOrder } from "../redux/orderSlice";
import { addNotification } from "../redux/notificationSlice";
import { saveTransaction } from "../redux/paymentSlice";

function Checkout() {
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.discountPrice * item.qty,
    0
  );

  const dispatch = useDispatch();

  const handleOrder = () => {
    const order = {
      id: Date.now(),
      status: "Placed",
      total,
      items,
      createdAt: new Date().toISOString(),
    };

    dispatch(placeOrder(order));

    dispatch(
      saveTransaction({
        id: Date.now(),
        amount: total,
        status: "Success",
      })
    );

    dispatch(
      addNotification("Your order has been placed")
    );

    toast.success("Order placed successfully");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Shipping Address
        </h2>

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          placeholder="Phone"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <textarea
          placeholder="Address"
          className="w-full border p-3 rounded-xl mb-4"
        />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
        <h2 className="text-2xl font-bold mb-5">
          Order Summary
        </h2>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-3"
          >
            <span>{item.title}</span>
            <span>₹{item.discountPrice}</span>
          </div>
        ))}

        <hr className="my-5" />

        <h3 className="text-xl font-bold">
          Total ₹{total}
        </h3>

        <button
          onClick={handleOrder}
          className="w-full mt-6 bg-violet-600 text-white py-3 rounded-xl"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;