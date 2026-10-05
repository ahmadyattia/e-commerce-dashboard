import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

interface Stat {
  title: string;
  value: number;
  icon: string;
}

export default function useOrdersCount() {
  const [ordersCount, setOrdersCount] = useState<Stat | null>(null);

  useEffect(() => {
    const fetchOrdersCount = async () => {
      try {
        const response = await api("/orders/count");

        const count: number = response.data.count;

        setOrdersCount({ title: "Orders", value: count, icon: "📦" });
      } catch (error) {
        console.error("Error fetching orders stats:", error);
      }
    };

    fetchOrdersCount();
  }, []);

  return ordersCount;
}
