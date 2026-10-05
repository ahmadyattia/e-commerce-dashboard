import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { Order } from "@/types/order";
import { useSearchParams } from "react-router";
import tableSize from "@/data/tableSize";

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("page") || "1";

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get(
          `/orders/all?page=${pageNumber}&size=${tableSize}`,
        );

        setOrders(response.data.orders);
      } catch (error) {
        setError("Error fetching products...");
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [pageNumber]);

  return { orders, loading, error };
};
