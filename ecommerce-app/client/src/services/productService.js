import products from "../assets/data/products.json";

export const getProducts = () => {
  return products;
};

export const getFeaturedProducts = () => {
  return products.filter((item) => item.featured);
};

export const getProductBySlug = (slug) => {
  return products.find((item) => item.slug === slug);
};