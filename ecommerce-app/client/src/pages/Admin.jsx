import { useSelector } from "react-redux";

function Admin() {
  const users = useSelector(
    (state) => state.auth.user
  );

  const products = useSelector(
    (state) => state.product.products
  );

  const orders = useSelector(
    (state) => state.orders.orders
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-10">
        Admin CMS
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Users</h3>
          <p className="text-3xl font-bold">
            {users ? 1 : 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Products</h3>
          <p className="text-3xl font-bold">
            {products.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3>Orders</h3>
          <p className="text-3xl font-bold">
            {orders.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admin;