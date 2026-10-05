import { User } from "@/types/user";
import { useState, useEffect } from "react";
import { api } from "../../../../services/api";

export function useUsers(pageNumber: number, pageSize: number) {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get(
          `/users/all?page=${pageNumber}&size=${pageSize}`,
        );

        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Error fetching users...");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, error, loading };
}
