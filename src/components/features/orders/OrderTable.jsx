import { mapOrderToRow } from "../../../data/mappers/mapOrderToRow";
import { orders } from "../../../data/orders";
import OrderRow from "./OrderRow";

const OrderTable = ({ orders }) => {
  if (!orders) return null;

  const rows = orders.map(mapOrderToRow);

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <table className="w-full text-left">
        <thead className="text-gray-500 text-sm">
          <tr>
            <th>Order Id</th>
            <th className="text-center">Customer</th>
            <th className="text-center">Date</th>
            <th className="text-center">Total</th>
            <th className="text-center">Payment</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            return <OrderRow key={row.id} row={row} order={orders[i]} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
