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
    setIsOpen(false);
    setEditingProduct(null);
  };

  // DELETE
  // const handleDelete = (id) => {
  //   setProducts((prev) => prev.filter((p) => p.id !== id));
  // };

  // OPEN EDIT
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsOpen(true);
  };

  // console.log(editingProduct);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {loading && <p>Loading products...</p>}
      {error && <p>Error while fetching products...</p>}
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
