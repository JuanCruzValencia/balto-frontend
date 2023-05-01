import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputTypes } from "./types";
import { signIn } from "next-auth/react";

const LoginComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputTypes>();

  const onSubmit: SubmitHandler<LoginInputTypes> = (data) => {
    signIn("credentials-login", { ...data });
  };

  return (
    <div className="flex flex-col items-center justify-between gap-10 bg-green h-[500px] w-[400px] rounded p-6 font-bold">
      <h2 className="text-l">Bienvenido!</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-between h-full w-full max-w-[310px] gap-10"
      >
        <div className="flex flex-col gap-10 h-full w-full">
          <input
            type="email"
            placeholder="Email"
            className="p-1 bg-green border-b-2 outline-none border-font w-full"
            {...register("email")}
          />
          {errors.email && <span>This field is required</span>}
          <input
            type="password"
            placeholder="Password"
            className="p-1 bg-green border-b-2 outline-none border-font w-full"
            {...register("password")}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <button
          type="submit"
          className="text-s bg-font w-full rounded text-white p-2 uppercase shadow-xl font-bold"
        >
          log
        </button>
      </form>
      <div>
        <span className="text-text">
          No tenes una cuenta? Registrate{" "}
          <Link href={"/register"} className="underline text-font font-bold">
            AQUI
          </Link>
        </span>
        <span className="text-text">
          Olvidaste tu password
          <Link href={"/restore"} className="underline text-font font-bold">
            Click Aqui
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginComponent;
