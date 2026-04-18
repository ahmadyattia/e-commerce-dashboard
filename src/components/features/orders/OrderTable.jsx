import { mapOrderToRow } from "../../../data/mappers/mapOrderToRow";
import { orders } from "../../../data/orders";
import OrderRow from "./OrderRow";

const OrderTable = () => {
  const rows = orders.map(mapOrderToRow);

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <table className="w-full text-left">
        <thead className="text-gray-500 text-sm">
          <tr>
            <th>Order Id</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return <OrderRow key={row.id} row={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
