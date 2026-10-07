import Pagination from "@/components/ui/Pagination";
import UsersTable from "../../components/features/users/UsersTable";
import { useUsers } from "../../components/features/users/hooks/useUsers.js";

const Users = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error fetching users...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <UsersTable users={users} />
      <Pagination tableName="users" />
    </div>
  );
};

export default Users;
