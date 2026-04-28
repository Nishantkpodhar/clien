export const registerUser = async (req, res) => {
  res.status(201).json({ message: 'User registered' });
};

export const loginUser = async (req, res) => {
  res.status(200).json({ token: 'token' });
};
