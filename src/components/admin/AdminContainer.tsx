import { User } from "@/interfaces";
import UsersFlexContainer from "./UsersFlexContainer";

type Props = {
  users: User[];
};

const AdminContainer: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <UsersFlexContainer users={users} />
    </div>
  );
};

export default AdminContainer;
