import { Order } from "@/types/order";
import OrderDetailsModal from "./OrderDetailsModal.jsx";
import { useState } from "react";

interface OrderRowProps {
  order: Order;
}

const OrderRow = ({ order }: OrderRowProps) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <tr className="border-t hover:bg-gray-50 odd:bg-slate-50">
      <td className="p-3 font-medium">{order.id}</td>
      <td className="p-3">
        <div className="text-center">{order.full_name}</div>
        <div className="text-sm text-gray-500 text-center">{order.email}</div>
      </td>
      <td className="text-center p-3">{order.created_at}</td>
      <td className="font-medium text-center p-3">${order.total}</td>
      <td className="p-3 text-center">
        <button
          onClick={() => setSelectedOrder(order)}
          className="text-blue-600 hover:underline cursor-pointer"
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
