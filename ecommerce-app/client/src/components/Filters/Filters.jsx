import categories from "../../assets/data/categories.json";
import brands from "../../assets/data/brands.json";

function Filters({
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="font-bold text-xl mb-5">Filters</h3>

      <div className="mb-6">
        <h4 className="font-semibold mb-2">Category</h4>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`block w-full text-left p-2 rounded ${
              selectedCategory === cat
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>
        <h4 className="font-semibold mb-2">Brand</h4>

        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => setSelectedBrand(brand.name)}
            className={`block w-full text-left p-2 rounded ${
              selectedBrand === brand.name
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {brand.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;