import React from "react";
import { mapOrderToDetails } from "../../../data/mappers/mapOrderToDetails";
import Modal from "../../ui/Modal";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderItemsTable from "./OrderItemsTable";
import SummaryCard from "../../ui/SummaryCard";

const OrderDetailsModal = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  const mappedOrder = mapOrderToDetails(order);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Order {mappedOrder.id}</h2>
        </div>

        {/* SUMMARY */}
        <div className="flex flex-wrap gap-4">
          <SummaryCard title="Customer Id" value={mappedOrder.customer.id} />
          <SummaryCard
            title="Customer Name"
            value={mappedOrder.customer.name}
          />

          <SummaryCard title="Total" value={mappedOrder.formattedTotal} />
          <SummaryCard title="Date" value={mappedOrder.date} />
        </div>

        {/* ITEMS */}
        <OrderItemsTable items={mappedOrder.items} />

        {/* SHIPPING */}
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-medium mb-2">Shipping</h3>
          <p>{mappedOrder.shippingMethod}</p>
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
