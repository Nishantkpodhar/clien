const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <span>{item?.name || 'Cart Item'}</span>
    </div>
  );
};

export default CartItem;
