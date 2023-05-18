import { User } from "@/interfaces";
import UsersFlexContainer from "./UsersFlexContainer";

type Props = {
  users: User[];
};

const AdminContainer: React.FC<Props> = ({ users }) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1>Admin Panel</h1>
      <UsersFlexContainer users={users} />
    </div>
  );
};

export default AdminContainer;
