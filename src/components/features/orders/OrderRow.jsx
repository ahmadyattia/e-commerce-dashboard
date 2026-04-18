import OrderStatusBadge from "./OrderStatusBadge";

const OrderRow = ({ row }) => {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="py-3 font-medium">{row.id}</td>
      <td>
        <div>{row.customerName}</div>
        <div className="text-sm text-gray-500">{row.customerEmail}</div>
      </td>
      <td>{row.date}</td>
      <td className="font-medium">{row.total.formatted}</td>
      <OrderStatusBadge status={row.status} />
      <OrderStatusBadge status={row.paymentStatus} type="payment" />
      <td>
        <button className="text-blue-600 hover:underline">View</button>
      </td>
    </tr>
  );
};

export default OrderRow;
