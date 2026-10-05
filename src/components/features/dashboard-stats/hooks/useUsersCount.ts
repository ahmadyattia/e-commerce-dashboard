import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

interface Stat {
  title: string;
  value: number;
  icon: string;
}

export default function useUsersCount() {
  const [usersCount, setUsersCount] = useState<Stat | null>(null);

  useEffect(() => {
    const fetchUsersCount = async () => {
      try {
        const response = await api("/users/count");

        const count: number = response.data.count;

        setUsersCount({ title: "Users", value: count, icon: "👤" });
      } catch (error) {
        console.error("Error fetching orders stats:", error);
      }
    };

    fetchUsersCount();
  }, []);

  return usersCount;
}
