import { useForm, SubmitHandler } from "react-hook-form";
import { RestoreInputTypes } from "@/interfaces/index";
import { ServerRest } from "@/utils/backend/server-rest";
import { useRouter } from "next/router";

const RestorePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RestoreInputTypes>();
  const router = useRouter();

  const onSubmit: SubmitHandler<RestoreInputTypes> = async (data) => {
    const restoreEmail = { ...data };

    const response = await ServerRest.post("/restore", {
      ...restoreEmail,
    });

    if (response.status === 200) {
      router.push("/login");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <h2>Resotore Password</h2>
      <span>
        Please entre your email and we will send the link to restore your
        password
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-7">
        <input
          type="email"
          placeholder="Entre your email"
          className="p-1 bg-green border-b-2 outline-none border-font w-full"
        />
        {errors.email && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default RestorePasswordForm;
