import { api } from "../../../../services/api";
import { useEffect, useState } from "react";

export default function useUsersCount() {
  const [usersCount, setUsersCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchUsersCount = async () => {
      try {
        const response = await api("/users/count");

        const count: number = response.data.count;

        setUsersCount(count);
      } catch (error) {
        console.error("Error fetching orders stats:", error);
      }
    };

    fetchUsersCount();
  }, []);

  return usersCount;
}
