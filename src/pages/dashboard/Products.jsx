import ProductTable from "../../components/features/products/ProductTable";
<<<<<<< HEAD
import { products as initialProducts } from "../../data/products";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import ProductForm from "../../components/features/products/ProductForm";

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isOpen, setIsOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSubmit = (data) => {
    if (editingProduct) {
      // EDIT
      setProducts((prev) =>
        prev.map((p) => (p.id == editingProduct.id ? { ...p, ...data } : p)),
      );
    } else {
      // ADD
      const newProduct = {
        ...data,
      };
      setProducts((prev) => [...prev, newProduct]);
    }

    setIsOpen(false);
    setEditingProduct(null);
  };

  console.log("products", products);

  // DELETE
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // OPEN EDIT
  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsOpen(true);
  };
=======
import productsMapper from "../../data/mappers/productsMapper";
import { useProducts } from "../../components/features/products/hooks/useProducts";

const Products = () => {
  const { products, error, loading } = useProducts();
  const mappedProducts = productsMapper(products);
>>>>>>> connect-firebase

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
<<<<<<< HEAD
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 mt-4 bg-black rounded text-white rounded"
      >
        + Add Product
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-bond mb-4">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h2>

        <ProductForm onSubmit={handleSubmit} initialData={editingProduct} />
      </Modal>
=======
      {loading && <p>Loading products...</p>}
      {error && <p>Error while fetching products...</p>}
      {products && <ProductTable products={mappedProducts} />}
>>>>>>> connect-firebase
    </div>
  );
};

export default Products;
