export const mapOrderToDetails = (order) => {
  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return {
    id: order.id,
    customer: order.customer,
    items: order.items,
    status: order.status,
    paymentStatus: order.paymentStatus,
    date: new Date(order.createdAt).toLocaleDateString(),
    total,
    formattedTotal: `$${total}`,
    shippingAddress: order.shippingAddress,
  };
};
