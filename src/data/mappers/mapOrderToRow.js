export const mapOrderToRow = (order) => {
  return {
    id: order.orderId,
    customerName: order.shipping.fullName,
    customerEmail: order.shipping.email,
    date: new Date(order.date).toLocaleDateString(),
    total: {
      value: order.total,
      formatted: `$${order.total}`,
    },
    shippingMethod: order.shipping.shippingMethod,
  };
};
