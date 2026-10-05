import { User } from "@/types/user";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { api } from "../../../../services/api";
import tableSize from "@/data/tableSize";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("page") || "1";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get(
          `/users/all?page=${pageNumber}&size=${tableSize}`,
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
  }, [pageNumber]);

  return { users, error, loading };
}
