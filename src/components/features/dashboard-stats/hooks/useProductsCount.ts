import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

export default function useProductsCount() {
  const [ProductsCount, setProductsCount] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    const fetchProductsCount = async () => {
      try {
        const response = await api("/products/count");

        const count: number = response.data.count;

        setProductsCount(count);
      } catch (error) {
        console.error("Error fetching products stats:", error);
      }
    };

    fetchProductsCount();
  }, []);

  return ProductsCount;
}
