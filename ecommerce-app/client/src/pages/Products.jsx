import { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import Filters from "../components/Filters/Filters";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductCard from "../components/ProductCard/ProductCard";

function Products() {
  const { products } = useSelector((state) => state.product);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("");
  const [selectedBrand, setSelectedBrand] =
    useState("");

  const filtered = products.filter((item) => {
    return (
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (selectedCategory
        ? item.category === selectedCategory
        : true) &&
      (selectedBrand
        ? item.brand === selectedBrand
        : true)
    );
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">
        <div>
          <Filters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
        </div>

        <div className="col-span-3">
          <SearchBar value={search} onChange={setSearch} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;