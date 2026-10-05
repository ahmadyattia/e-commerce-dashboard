import { User } from "@/types/user";

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  return <table></table>;
};

export default UsersTable;
