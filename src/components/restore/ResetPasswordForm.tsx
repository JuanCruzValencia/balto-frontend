import { ResetPasswordInputs } from "@/interfaces";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

const ResetPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInputs>();
  const router = useRouter();
  const { uid, token } = router.query;

  const onSubmit: SubmitHandler<ResetPasswordInputs> = async (data) => {
    const newPassword = { ...data };
    const resolve = await BrowserRest.post(
      `/users/resetPassword/${uid}/${token}`,
      {
        ...newPassword,
      }
    );

    if (resolve.status === 200) {
      router.push("/login");
    }
  };

  return (
    <div className="w-full max-w-[400px] h-full flex flex-col items-center justify-center gap-7 bg-green rounded p-6 font-bold">
      <h2 className="text-m text-center capitalize">Nueva contrasena</h2>
      <span className="text-s text-justify">
        Por favor ingrese una nueva contrasena. Debe ser diferente a la ultima
        ingresada.
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-between h-full w-full max-w-[310px] gap-10"
      >
        <input
          type="password"
          placeholder="Enter a new password"
          className="p-1 bg-green border-b-2 outline-none border-font w-full"
          {...register("password")}
        />
        {errors.password && <span>This field is required</span>}
        <button
          type="submit"
          className="text-s bg-font w-full rounded text-white p-2 uppercase shadow-xl font-bold"
        >
          confirmar
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
