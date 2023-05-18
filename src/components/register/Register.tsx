import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { useRouter } from "next/router";
import { RegisterInputsTypes } from "@/interfaces";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputsTypes>({});
  const router = useRouter();

  const notify = () => {
    toast.success("Usuario creado con exito!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onSubmit: SubmitHandler<RegisterInputsTypes> = async (data) => {
    const registerData = { ...data };

    const response = await BrowserRest.post(`/users`, {
      ...registerData,
    });

    if (response.status === 200) {
      notify();
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

    return response.data;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-evenly gap-4 bg-green h-[700px] w-[500px] rounded p-6 font-bold">
        <h2 className="text-l">Registrate!</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 items-center justify-evenly h-full w-full max-w-[400px]"
        >
          <input
            type="text"
            placeholder="First Name"
            className="p-1 bg-green border-b-2 outline-none border-font w-full"
            {...register("first_name")}
          />
          {errors.first_name && <span>This field is required</span>}
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
            className="text-s bg-font w-full rounded text-white p-2 uppercase shadow-xl font-bold hover:bg-footer"
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
      <ToastContainer />
    </>
  );
};

export default RegisterComponent;
