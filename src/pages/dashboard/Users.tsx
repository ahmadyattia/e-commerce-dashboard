import UsersTable from "@/components/features/users/UsersTable";
import { useUsers } from "@/components/features/users/hooks/useUsers";

const Users = () => {
  const { users, loading, error } = useUsers(1, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
