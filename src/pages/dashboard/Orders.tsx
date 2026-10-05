import Pagination from "@/components/ui/Pagination.js";
import OrderTable from "../../components/features/orders/OrderTable.jsx";
import { useOrders } from "../../components/features/orders/hooks/useOrders";

const Orders = () => {
  const { orders, loading, error } = useOrders();

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error loading orders.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <OrderTable orders={orders} />
      <Pagination tableName="orders" />
    </div>
  );
};

export default Orders;
