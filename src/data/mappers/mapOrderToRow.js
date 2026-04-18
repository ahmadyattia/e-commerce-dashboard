export const mapOrderToRow = (order) => {
  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return {
    id: order.id,
    customerName: order.customer.name,
    customerEmail: order.customer.email,
    date: new Date(order.createdAt).toLocaleDateString(),
    total: {
      value: total,
      formatted: `$${total}`,
    },
    status: order.status,
    paymentStatus: order.paymentStatus,
    itemCount: order.items.length,
  };
};
