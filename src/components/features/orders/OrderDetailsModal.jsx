import React from "react";
import { mapOrderToDetails } from "../../../data/mappers/mapOrderToDetails";
import Modal from "../../ui/Modal";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderItemsTable from "./OrderItemsTable";
import SummaryCard from "../../ui/SummaryCard";

const OrderDetailsModal = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  const data = mapOrderToDetails(order);
  console.log(order);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Order {data.id}</h2>

          <OrderStatusBadge status={data.status} />
        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-4 gap-4">
          <SummaryCard title="Customer" value={data.customer.name} />
          <SummaryCard title="Total" value={data.formattedTotal} />
          <SummaryCard title="Payment" value={data.paymentStatus} />
          <SummaryCard title="Date" value={data.date} />
        </div>

        {/* ITEMS */}
        <OrderItemsTable items={data.items} />

        {/* SHIPPING */}
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-medium mb-2">Shipping</h3>
          <p>
            {data.shippingAddress.city} {data.shippingAddress.country}
          </p>
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
