import { BiUser } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const LoginIcon = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button
          className="capitalize flex items-center gap-2 text-green"
          onClick={() => signOut()}
        >
          <BiUser /> log out
        </button>
      </>
    );
  }
  return (
    <>
      <Link className="capitalize flex items-center gap-2" href={"/login"}>
        <BiUser /> log in
      </Link>
    </>
  );
};

export default LoginIcon;

{
}
