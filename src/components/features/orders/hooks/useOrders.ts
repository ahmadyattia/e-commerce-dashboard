import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { Order } from "@/types/order";

export const useOrders = (pageNumber: number, pageSize: number) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchOrders() {
    try {
      const response = await api.get(
        `/orders/all?page=${pageNumber}&size=${pageSize}`,
      );

      setOrders(response.data.orders);
    } catch (error) {
      setError("Error fetching products...");
    } finally {
      setLoading(false);
    }
  }

  fetchOrders();

  return { orders, loading, error };
};
