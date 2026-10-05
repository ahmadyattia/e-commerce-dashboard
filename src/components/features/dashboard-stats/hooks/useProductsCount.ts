import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

interface Stat {
  title: string;
  value: number;
  icon: string;
}

export default function useProductsCount() {
  const [ProductsCount, setProductsCount] = useState<Stat | null>(null);

  useEffect(() => {
    const fetchProductsCount = async () => {
      try {
        const response = await api("/products/count");

        const count: number = response.data.count;

        setProductsCount({ title: "Products", value: count, icon: "🛒" });
      } catch (error) {
        console.error("Error fetching products stats:", error);
      }
    };

    fetchProductsCount();
  }, []);

  return ProductsCount;
}
