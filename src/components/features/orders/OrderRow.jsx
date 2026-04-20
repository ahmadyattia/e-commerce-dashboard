import OrderDetailsModal from "./OrderDetailsModal";
import OrderStatusBadge from "./OrderStatusBadge";
import { useState } from "react";

const OrderRow = ({ row, order }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="py-3 font-medium">{row.id}</td>
      <td className="py-3">
        <div className="text-center">{row.customerName}</div>
        <div className="text-sm text-gray-500 text-center">
          {row.customerEmail}
        </div>
      </td>
      <td className="text-center py-3">{row.date}</td>
      <td className="font-medium text-center py-3">{row.total.formatted}</td>
      <td className="py-3 text-center">
        <button
          onClick={() => setSelectedOrder(order)}
          className="text-blue-600 hover:underline"
        >
          View
        </button>
      </td>

      <td>
        <OrderDetailsModal
          order={selectedOrder}
          isOpen={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      </td>
    </tr>
  );
};

export default OrderRow;
