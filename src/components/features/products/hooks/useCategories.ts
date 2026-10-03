import { useState, useEffect } from "react";
import { api } from "../../../../services/api";
import { type Product } from "../../../../types/product";
import { type Category } from "@/types/category";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");

        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Error fetching categories...");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, error, loading };
};
