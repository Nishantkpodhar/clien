import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";

function Wishlist() {
  const { items } = useSelector(
    (state) => state.wishlist
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Wishlist
      </h1>

      {items.length === 0 ? (
        <p>No wishlist items</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;