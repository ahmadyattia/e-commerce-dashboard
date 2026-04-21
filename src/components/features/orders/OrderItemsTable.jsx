const OrderItemsTable = ({ items }) => {
  return (
    <div>
      <h3 className="font-medium mb-3">Items</h3>

      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Product</th>
            <th className="text-center">Qty</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i} className="border-t">
              <td>{item.title}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center">{item.price}</td>
              <td className="text-center">{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemsTable;
