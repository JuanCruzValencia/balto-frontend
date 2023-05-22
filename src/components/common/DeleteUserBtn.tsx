import { UserContext } from "@/context/user/UserContext";
import { UserContextProps, RESPONSE_STATUS, User } from "@/interfaces";
import { toast } from "react-toastify";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  uid: User["_id"];
  className: string;
};

const DeleteUserBtn: React.FC<Props> = ({ uid, className }) => {
  const { deleteUser } = useContext(UserContext) as UserContextProps;

  const notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleClick = (uid: User["_id"]) => {
    const response = deleteUser(uid);

    if (response.status === RESPONSE_STATUS.SUCCESS) notify();
  };

  return (
    <>
      <button onClick={() => handleClick(uid)} className={className}>
        delete
      </button>
    </>
  );
};

export default DeleteUserBtn;
