import ProductTable from "../../components/features/products/ProductTable";
import { products } from "../../data/products";
import productsMapper from "../../data/mappers/productsMapper";

const Products = () => {
  const mappedProducts = productsMapper(products);
  console.log(mappedProducts);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ProductTable products={mappedProducts} />
    </div>
  );
};

export default Products;
