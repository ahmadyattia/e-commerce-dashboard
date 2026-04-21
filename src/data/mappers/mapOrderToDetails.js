export const mapOrderToDetails = (order) => {
  return {
    id: order.orderId,
    customer: { name: order.shipping.fullName, id: order.userId },
    items: order.items,
    date: new Date(order.date).toLocaleDateString(),
    total: order.total,
    formattedTotal: `$${order.total}`,
    shippingMethod: order.shipping.shippingMethod,
  };
};
