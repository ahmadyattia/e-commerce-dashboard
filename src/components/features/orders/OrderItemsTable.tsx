import { CartProduct } from "@/types/product";

interface OrderItemsTableProps {
  items: CartProduct[];
}

const OrderItemsTable = ({ items }: OrderItemsTableProps) => {
  return (
    <div>
      <h3 className="font-medium mb-3">Items</h3>

      <table className="w-full text-sm overflow-auto">
        <thead>
          <tr>
            <th>Product</th>
            <th className="text-center p-4">Qty</th>
            <th className="text-center p-4">Price</th>
            <th className="text-center p-4">Total</th>
            <th className="text-center p-4">Id</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={item.id} className="border-t">
              <td>{item.title}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center">${item.price}</td>
              <td className="text-center">${item.price * item.quantity}</td>
              <td className="text-center">{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemsTable;
