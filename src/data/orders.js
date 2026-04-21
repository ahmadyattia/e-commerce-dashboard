// data/orders.js
export const orders = [
  {
    id: "ord_001",
    customer: {
      id: "cus_001",
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
    },
    items: [
      { productId: "prod_1", title: "T-shirt", quantity: 2, price: 20 },
      { productId: "prod_2", title: "Sneakers", quantity: 1, price: 80 },
    ],
    status: "processing", // pending | processing | shipped | delivered | cancelled
    paymentStatus: "paid", // paid | unpaid | refunded
    createdAt: "2026-04-15T10:30:00Z",
    currency: "USD",
    shippingAddress: {
      city: "Alexandria",
      country: "Egypt",
    },
  },
];
