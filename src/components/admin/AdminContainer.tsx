import { User } from "@/interfaces";
import UsersFlexContainer from "./UsersFlexContainer";
import { useIsAdmin } from "@/hooks";

type Props = {
  users: User[];
};

const AdminContainer: React.FC<Props> = ({ users }) => {
  const { isAdmin } = useIsAdmin();

  if (isAdmin) {
    return (
      <div className="flex flex-col items-center w-full h-full">
        <h1>Admin Panel</h1>
        <UsersFlexContainer users={users} />
      </div>
    );
  }
  return (
    <>
      <h1>Error Not Auth</h1>
    </>
  );
};

export default AdminContainer;
