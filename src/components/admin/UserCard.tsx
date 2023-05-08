import { UserContext } from "@/context/user/UserContext";
import { User, UserContextProps } from "@/interfaces";
import Image from "next/image";
import { useContext } from "react";

type Props = {
  user: User;
};

const UserCard: React.FC<Props> = ({ user }) => {
  const { changeRole, deleteUser } = useContext(
    UserContext
  ) as UserContextProps;

  return (
    <div className="flex gap-5 bg-white items-center justify-between p-5 w-full border-b-2 border-lgrey">
      <Image src={""} width={70} height={70} alt={user._id} />
      <div className="flex flex-col">
        <h4 className="font-bold">
          {user.lastName}, {user.firstName}
        </h4>
        <span className="text-xs">{user.email}</span>
      </div>
      <span>{user.last_connection.getDate()}</span>
      <span className="font-bold">${user.role}</span>
      <button
        className="capitalize text-font font-bold"
        onClick={() => changeRole(user._id)}
      >
        change role
      </button>
      <button
        className="capitalize text-red font-bold"
        onClick={() => deleteUser(user._id)}
      >
        delete
      </button>
    </div>
  );
};

export default UserCard;
