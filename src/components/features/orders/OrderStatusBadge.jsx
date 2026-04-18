import React from "react";

const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",

  paid: "bg-green-100 text-green-700",
  unpaid: "bg-gray-100 text-gray-700",
  refunded: "bg-red-100 text-red-700",
};

const OrderStatusBadge = ({ status }) => {
  return (
    <div>
      {status === "paid" || status === "unpaid" || status === "refunded" ? (
        <select
          value={status}
          className={`px-2 py-1 rounded-lg text-xs font-medium ${statusStyles[status]}`}
        >
          <option>paid</option>
          <option>unpaid</option>
          <option>refunded</option>
        </select>
      ) : (
        <select
          value={status}
          className={`px-2 py-1 rounded-lg text-xs font-medium ${statusStyles[status]}`}
        >
          <option>pending</option>
          <option>processing</option>
          <option>shipped</option>
          <option>delivered</option>
        </select>
      )}
    </div>
  );
};

export default OrderStatusBadge;
