import { useSelector } from "react-redux";

function Seller() {
  const { inventory } = useSelector(
    (state) => state.seller
  );

  const revenue = inventory.reduce(
    (sum, item) =>
      sum + item.price * item.stock,
    0
  );

  const lowStock = inventory.filter(
    (item) => item.stock < 10
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Seller Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Total Products</h3>
          <p className="text-3xl font-bold">
            {inventory.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Revenue</h3>
          <p className="text-3xl font-bold">
            ₹{revenue}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Low Stock</h3>
          <p className="text-3xl font-bold text-red-500">
            {lowStock.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Seller;