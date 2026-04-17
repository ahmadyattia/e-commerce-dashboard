// import { products } from "../../../data/products";

const ProductTable = ({ products }) => {
  console.log(products);
  return (
    <div className="bg-white rounded-xl flex justify-center">
      <table className="w-full border-separate border-spacing-0 border border-gray-100 rounded-xl">
        <thead>
          <tr>
            <th className="p-6 border-solid border-gray-100 border rounded-tl-xl">
              Title
            </th>
            <th className="p-6 border-solid border-gray-100 border">id</th>
            <th className="p-6 border-solid border-gray-100 border">Price</th>
            <th className="p-6 border-solid border-gray-100 border">Stock</th>
            <th className="p-6 border-solid border-gray-100 border rounded-tr-xl">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            const isLast = index === products.length - 1;

            return (
              <tr className="">
                <td
                  className={`p-6 text-center border-solid border-gray-100 border ${isLast && "rounded-bl-xl"}`}
                >
                  <img src={product.image} alt={product.title} />
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
                <td
                  className={`p-6 text-center border-solid border-gray-100 border ${isLast && "rounded-br-xl"}`}
                >
                  {product.status}
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
