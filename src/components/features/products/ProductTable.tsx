// import { products } from "../../../data/products";
import { api } from "../../../services/api";
import { Product } from "@/types/product";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  // onDelete: (id: string) => void;
}

const ProductTable = ({ products, onEdit }: ProductTableProps) => {
  const handleDeleteProduct = async (product: Product) => {
    const confirmation = confirm(
      `Are you sure you want to delete "${product.title}"?`,
    );

    if (!confirmation) return;

    try {
      await api.delete(`products/delete/${product.id}`);

      alert(`Product "${product.title}" has been deleted.`);
    } catch (error) {
      console.error("Error deleting the product:", error);
      alert("Error deleting the product...");
    }
  };

  return (
    <div className="bg-white rounded-xl flex overflow-auto">
      <table className="w-full border-separate border-spacing-0 border border-gray-100 rounded-xl">
        <thead>
          <tr>
            <th className="p-6 text-left border-solid border-gray-100 border rounded-tl-xl">
              Title
            </th>
            <th className="p-6 border-solid border-gray-100 border">Price</th>
            <th className="p-6 border-solid border-gray-100 border">
              Category
            </th>
            <th className="p-6 border-solid border-gray-100 border">id</th>
            <th className="p-6 border-solid border-gray-100 border rounded-tr-xl">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            const isLast = index === products.length - 1;

            return (
              <tr className="odd:bg-slate-50" key={product.id}>
                <td
                  className={`p-6 border-solid border-gray-100 border ${isLast && "rounded-bl-xl"}`}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={product.images[0].url}
                      alt={product.title}
                      className="w-1/4 min-w-20 aspect-square rounded-lg object-cover"
                    />
                    <span>{product.title}</span>
                  </div>
                </td>
                <td className="p-6 text-center border-solid border-gray-100 border">
                  ${product.price}
                </td>
                <td className="p-6 text-center border-solid border-gray-100 border">
                  {product.category.name}
                </td>
                <td className="p-6 text-center border-solid border-gray-100 border">
                  {product.id}
                </td>
                <td
                  className={`p-6 text-center border-solid border-gray-100 border ${isLast && "rounded-br-xl"}`}
                >
                  <div className="flex flex-col">
                    <button
                      onClick={() => onEdit(product)}
                      className="px-4 py-2 m-1 bg-gray-200 rounded text-blue-600 text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product)}
                      className="px-4 py-2 m-1 bg-gray-200 rounded text-red-500 text-xs"
                    >
                      Delete
                    </button>
                  </div>
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
