// fetch products from database

import { useState, useEffect } from "react";
import { api } from "../../../../services/api";
import { type Product } from "../../../../types/product";
import { useSearchParams } from "react-router";
import tableSize from "@/data/tableSize";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get("page") || "1";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(
          `/products?page=${pageNumber}&size=${tableSize}`,
        );

        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products...");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [pageNumber]);

  return { products, error, loading };
};
