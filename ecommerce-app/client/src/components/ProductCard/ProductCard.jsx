import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-card__image">Image</div>
      <h3>{product?.name || 'Product Name'}</h3>
    </article>
  );
};

export default ProductCard;
