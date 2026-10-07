import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

export default function useOrdersCount() {
  const [ordersCount, setOrdersCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchOrdersCount = async () => {
      try {
        const response = await api("/orders/count");

        const count: number = response.data.count;

        setOrdersCount(count);
      } catch (error) {
        console.error("Error fetching orders stats:", error);
      }
    };

    fetchOrdersCount();
  }, []);

  return ordersCount;
}
