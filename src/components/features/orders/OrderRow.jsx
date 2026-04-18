import React from "react";

const OrderRow = ({ row }) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.customerName}</td>
      <td>{row.customerEmail}</td>
      <td>{row.date}</td>
      <td>{row.total.formatted}</td>
      <OrderStatusBadge status={row.status} />
      <OrderStatusBadge status={row.paymentStatus} type="payment" />
      <td>
        <button>View</button>
      </td>
    </tr>
  );
};

export default OrderRow;
