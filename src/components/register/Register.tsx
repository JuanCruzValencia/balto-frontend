import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterInputsTypes } from "./types";

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputsTypes>();

  const onSubmit: SubmitHandler<RegisterInputsTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-evenly gap-4 bg-green h-[700px] w-full max-w-[500px] rounded p-6 font-bold">
      <h2 className="text-l">Registrate!</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 items-center justify-evenly h-full max-h-[500px] w-full max-w-[400px]"
      >
        <input
          type="text"
          placeholder="First Name"
          className="p-1 bg-green border-b-2 outline-none border-font w-full"
          {...register("firt_name")}
        />
        {errors.firt_name && <span>This field is required</span>}
        <input
          type="text"
          placeholder="Last Name"
          className="p-1 bg-green border-b-2 outline-none border-font w-full"
          {...register("last_name")}
        />
        {errors.last_name && <span>This field is required</span>}
        <input
          type="number"
          placeholder="Age"
          className="p-1 bg-green border-b-2 outline-none border-font w-full"
          {...register("age")}
        />
        {errors.age && <span>This field is required</span>}
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
        <button
          type="submit"
          className="text-s bg-font w-full rounded text-white p-2 uppercase shadow-xl font-bold"
        >
          sign
        </button>
      </form>
      <div>
        <span className="text-text">
          Ya tenes una cuenta? Ingresa{" "}
          <Link href={"/login"} className="underline text-font font-bold">
            AQUI
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterComponent;
