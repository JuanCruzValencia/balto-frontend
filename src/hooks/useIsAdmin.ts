import { useState } from "react";
import { useSession } from "next-auth/react";
import { ROLE } from "@/interfaces";

const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const { data: session } = useSession();

  if (session && session.user?.role === ROLE.ADMIN) {
    setIsAdmin(true);
  }

  return { isAdmin };
};

export default useIsAdmin;
