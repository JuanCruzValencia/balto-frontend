import { User } from "@/interfaces";
import UserCard from "./UserCard";

type Props = {
  users: User[];
};

const UsersFlexContainer: React.FC<Props> = ({ users }) => {
  return (
    <div className="flex flex-col items-center justyfy-start">
      {users.map((user) => {
        return <UserCard user={user} key={user._id} />;
      })}
    </div>
  );
};

export default UsersFlexContainer;
