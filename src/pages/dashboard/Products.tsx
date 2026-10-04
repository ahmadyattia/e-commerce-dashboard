import ProductTable from "../../components/features/products/ProductTable.js";
import { useProducts } from "../../components/features/products/hooks/useProducts.js";
import { useState } from "react";
import Modal from "../../components/ui/Modal.js";
import ProductForm from "../../components/features/products/ProductForm.js";
import { Product } from "@/types/product.js";

const Products = () => {
  const { products, error, loading } = useProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const onSubmit = () => {
    setEditingProduct(null);
    setIsOpen(false);
  };

  // OPEN EDIT
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsOpen(true);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error while fetching products...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <button
        onClick={() => {
          setIsOpen(true);
          setEditingProduct(null);
        }}
        className="px-4 py-2 mt-4 bg-black rounded text-white rounded"
      >
        + Add Product
      </button>
      {products && <ProductTable products={products} onEdit={handleEdit} />}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-bond mb-4">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h2>

        <ProductForm onSubmit={onSubmit} editingProduct={editingProduct} />
      </Modal>
    </div>
  );
};

export default Products;
