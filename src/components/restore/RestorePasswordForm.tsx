import { useForm, SubmitHandler } from "react-hook-form";
import { RestoreInputTypes } from "@/interfaces/index";
import { useRouter } from "next/router";
import { BrowserRest } from "@/utils/frontend/browser-rest";

const RestorePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RestoreInputTypes>();
  const router = useRouter();

  const onSubmit: SubmitHandler<RestoreInputTypes> = async (data) => {
    const restoreEmail = { ...data };

    const response = await BrowserRest.post("/users/restore", {
      ...restoreEmail,
    });

    if (response.status === 200) {
      router.push("/login");
    }
  };

  return (
    <div className="w-full max-w-[400px] h-full flex flex-col items-center justify-center gap-7 bg-green rounded p-6 font-bold">
      <h2 className="text-m text-center capitalize">Recuperar contrasena</h2>
      <span className="text-s text-justify">
        Por favor ingrese su mail y le enviaremos un link a su correo para
        resetear su contrasena.
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-between h-full w-full max-w-[310px] gap-10"
      >
        <input
          type="email"
          placeholder="Entre your email"
          className="p-1 bg-green border-b-2 outline-none border-font w-full"
          {...register("email")}
        />
        {errors.email && <span>This field is required</span>}
        <button
          type="submit"
          className="text-s bg-font w-full rounded text-white p-2 uppercase shadow-xl font-bold hover:bg-footer"
        >
          enviar
        </button>
      </form>
    </div>
  );
};

export default RestorePasswordForm;
