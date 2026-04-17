import ProductTable from "../../components/features/products/ProductTable";
import { products } from "../../data/products";
import productsMapper from "../../data/mappers/productsMapper";

const Products = () => {
  const mappedProducts = productsMapper(products);
  console.log(mappedProducts);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="flex flex-col">
        <ProductTable products={mappedProducts} />
        <button className="p-2 mt-2 bg-green-700 rounded-xl text-white self-end w-max">
          + Add Product
        </button>
      </div>
    </div>
  );
};

export default Products;
