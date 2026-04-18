import { mapOrderToRow } from "../../../data/mappers/mapOrderToRow";
import { orders } from "../../../data/orders";

const OrderTable = () => {
  const rows = orders.map(mapOrderToRow);

  return (
    <div>
      <table>
        <thead>
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
            <OrderRow key={row.id} row={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
