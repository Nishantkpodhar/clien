import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "../components/layout/Layout";
import products from "../assets/data/products.json";
import reviews from "../assets/data/reviews.json";
import Rating from "../components/Rating/Rating";
import Review from "../components/Review";
import ProductCard from "../components/ProductCard/ProductCard";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.slug === slug);

  if (!product) return <Layout><h2 className="text-center py-24 text-2xl">Product not found</h2></Layout>;

  const productReviews = reviews.filter(
    (r) => r.productId === product.id
  );

  const similarProducts = products.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-2xl shadow-md"
          />

          <div>
            <h1 className="text-4xl font-bold mb-4">
              {product.title}
            </h1>

            <Rating value={product.rating} />

            <p className="text-gray-600 mt-5">
              {product.description}
            </p>

            <div className="mt-6 flex gap-4 items-center">
              <span className="text-3xl text-violet-600 font-bold">
                ₹{product.discountPrice}
              </span>

              <span className="line-through text-gray-400">
                ₹{product.price}
              </span>
            </div>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-8 bg-violet-600 text-white px-8 py-3 rounded-xl"
            >
              Add To Cart
            </button>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Reviews
          </h2>

          {productReviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Similar Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {similarProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ProductDetails;