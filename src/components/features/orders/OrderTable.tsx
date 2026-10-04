import { Order } from "@/types/order";
// import { mapOrderToRow } from "../../../data/mappers/mapOrderToRow";
import OrderRow from "./OrderRow.jsx";

interface OrderTableProps {
  orders: Order[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  if (!orders) return null;

  // const rows = orders.map(mapOrderToRow);

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <table className="w-full text-left">
        <thead className="text-gray-500 text-sm">
          <tr>
            <th>Id</th>
            <th className="text-center">Customer</th>
            <th className="text-center">Date</th>
            <th className="text-center">Total</th>
            <th className="text-center">Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return <OrderRow key={order.id} order={order} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
