export const createOrder = async (req, res) => {
  res.status(201).json({ message: 'Order created' });
};

export const getOrders = async (req, res) => {
  res.json([]);
};
