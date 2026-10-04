// import { mapOrderToDetails } from "../../../data/mappers/mapOrderToDetails";
import Modal from "../../ui/Modal.js";
import OrderItemsTable from "./OrderItemsTable.js";
import SummaryCard from "../../ui/SummaryCard.jsx";
import { Order } from "@/types/order.js";

interface OrderDetailsModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailsModal = ({
  order,
  isOpen,
  onClose,
}: OrderDetailsModalProps) => {
  if (!order) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Order {order.id}</h2>
        </div>

        {/* SUMMARY */}
        <div className="flex flex-wrap gap-4">
          <SummaryCard title="Customer Name" value={order.full_name} />

          <SummaryCard title="Total" value={`$${order.total}`} />
          <SummaryCard title="Date" value={order.created_at} />
          <SummaryCard title="Customer id" value={order.user_id} />
        </div>

        {/* ITEMS */}
        <OrderItemsTable items={order.items} />

        {/* SHIPPING */}
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-medium mb-2">Shipping</h3>
          <p className="text-gray-500">{order.shipping_method}</p>
          {order.shipping_method === "delivery" && (
            <p className="text-gray-500">
              {order.city}, {order.state} {order.zipcode}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 border rounded-lg">Cancel Order</button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Mark as Shipped
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default OrderDetailsModal;
