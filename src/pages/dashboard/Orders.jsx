import React from "react";
import OrderTable from "../../components/features/orders/OrderTable";
import { useOrders } from "../../components/features/orders/hooks/useOrders";

const Orders = () => {
  const { orders, loading, error } = useOrders();

  console.log(loading);
  console.log(error);

  // console.log(orders);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {loading && <p>Loading orders...</p>}
      {error && <p>Error loading orders.</p>}
      <OrderTable orders={orders} />
    </div>
  );
};

export default Orders;
