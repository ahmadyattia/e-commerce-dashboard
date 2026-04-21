// import { products } from "../../../data/products";

const ProductTable = ({ products, onEdit, onDelete }) => {
  console.log(products);
  return (
    <div className="bg-white rounded-xl flex justify-center">
      <table className="w-full border-separate border-spacing-0 border border-gray-100 rounded-xl">
        <thead>
          <tr>
            <th className="p-6 text-left border-solid border-gray-100 border rounded-tl-xl">
              Title
            </th>
            <th className="p-6 border-solid border-gray-100 border">id</th>
            <th className="p-6 border-solid border-gray-100 border">Price</th>
            <th className="p-6 border-solid border-gray-100 border">Stock</th>
            <th className="p-6 border-solid border-gray-100 border rounded-tr-xl">
              Status
            </th>
            <th className="p-6 border-solid border-gray-100 border rounded-tr-xl">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            const isLast = index === products.length - 1;

            return (
              <tr className="odd:bg-slate-50">
                <td
                  className={`p-6 text-center flex items-center border-solid border-gray-100 border ${isLast && "rounded-bl-xl"}`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-1/4 aspect-square"
                  />
                  <span>{product.title}</span>
                </td>
                <td className="p-6 text-center border-solid border-gray-100 border">
                  {product.id}
                </td>
                <td className="p-6 text-center border-solid border-gray-100 border">
                  ${product.price}
                </td>
                <td className="p-6 text-center border-solid border-gray-100 border">
                  {product.stock}
                </td>
                <td className="p-6 text-center border-solid border-gray-100 border">
                  {product.status}
                </td>
                <td
                  className={`p-6 text-center border-solid border-gray-100 border ${isLast && "rounded-br-xl"}`}
                >
                  <button
                    onClick={() => onEdit(product)}
                    className="px-4 py-2 m-1 bg-gray-200 rounded text-blue-600 text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
                    className="px-4 py-2 m-1 bg-gray-200 rounded text-red-500 text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
