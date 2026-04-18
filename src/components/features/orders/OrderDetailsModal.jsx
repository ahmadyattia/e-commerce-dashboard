import React from "react";
import { mapOrderToDetails } from "../../../data/mappers/mapOrderToDetails";

const OrderDetailsModal = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  const data = mapOrderToDetails(order);

  return <div>OrderDetailsModal</div>;
};

export default OrderDetailsModal;
