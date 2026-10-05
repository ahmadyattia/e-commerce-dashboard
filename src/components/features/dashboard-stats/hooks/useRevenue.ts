import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

interface Stat {
  title: string;
  value: number;
  icon: string;
}

export default function useRevenue() {
  const [revenue, setRevenue] = useState<Stat | null>(null);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await api("/orders/revenue");

        const revenue: number = response.data.revenue;

        setRevenue({ title: "Revenue", value: revenue, icon: "💰" });
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    };

    fetchRevenue();
  }, []);

  return revenue;
}
