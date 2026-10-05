import { User } from "@/types/user";

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <table className="w-full text-left">
      <thead className="text-gray-500 text-sm">
        <th>First Name</th>
        <th className="py-3">Last Name</th>
        <th className="py-3">Email</th>
        <th className="py-3">id</th>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr className="border-t hover:bg-gray-50 odd:bg-slate-50">
              <td className="py-3">{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersTable;
