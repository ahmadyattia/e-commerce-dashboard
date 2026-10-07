import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

export default function useRevenue() {
  const [revenue, setRevenue] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await api("/orders/revenue");

        const revenue: number = response.data.revenue;

        setRevenue(revenue);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    };

    fetchRevenue();
  }, []);

  return revenue;
}
