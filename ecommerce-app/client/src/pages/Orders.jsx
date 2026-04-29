import { useSelector } from "react-redux";

function Orders() {
  const { orders } = useSelector(
    (state) => state.orders
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white p-6 rounded-xl shadow mb-5"
        >
          <p className="font-semibold">
            Order ID: {order.id}
          </p>

          <p>Status: {order.status}</p>

          <p>Total: ₹{order.total}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;