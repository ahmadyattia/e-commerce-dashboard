import { User } from "@/types/user";

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 overflow-auto">
      <table className="w-full text-left">
        <thead className="text-gray-500 text-sm">
          <th className="p-3">First Name</th>
          <th className="p-3">Last Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">id</th>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr className="border-t hover:bg-gray-50 odd:bg-slate-50">
                <td className="p-3">{user.first_name}</td>
                <td className="p-3">{user.last_name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
