import { NextPage } from "next";

const Error: NextPage = () => {
  return (
    <div className="flex p-10 items-center justify-center h-[70vh]">
      <h2 className="uppercase text-l font-bold text-red">oops... the page you are trying to access is denied</h2>
    </div>
  );
};

export default Error;
