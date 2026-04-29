const users = [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
  },
  {
    id: 2,
    name: "Seller",
    email: "seller@gmail.com",
    password: "123456",
    role: "seller",
  },
  {
    id: 3,
    name: "User",
    email: "user@gmail.com",
    password: "123456",
    role: "user",
  },
];

export const loginService = (email, password) => {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) throw new Error("Invalid credentials");

  return {
    user,
    token: "mock-jwt-token",
  };
};

export const signupService = (data) => {
  return {
    user: {
      ...data,
      role: "user",
    },
    token: "mock-jwt-token",
  };
};