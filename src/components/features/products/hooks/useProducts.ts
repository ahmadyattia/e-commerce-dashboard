// fetch products from database

import { useState, useEffect } from "react";
import { api } from "../../../../services/api";
import { type Product } from "../../../../types/product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");

        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products...");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, error, loading };
};
