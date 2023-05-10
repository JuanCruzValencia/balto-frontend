import Link from "next/link";
import { GrUserAdmin } from "react-icons/gr";

const AdminLink = () => {
  return (
    <Link href={"/admin"}>
      <div className="capitalize">
        <GrUserAdmin />
        <span>admin</span>
      </div>
    </Link>
  );
};

export default AdminLink;
