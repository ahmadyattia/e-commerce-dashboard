import ProductTable from "../../components/features/products/ProductTable";
import productsMapper from "../../data/mappers/productsMapper";
import { useProducts } from "../../components/features/products/hooks/useProducts";

const Products = () => {
  const { products, error, loading } = useProducts();
  const mappedProducts = productsMapper(products);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {loading && <p>Loading products...</p>}
      {error && <p>Error while fetching products...</p>}
      {products && <ProductTable products={mappedProducts} />}
    </div>
  );
};

export default Products;
