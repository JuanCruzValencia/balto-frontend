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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firt_name")} />
      {errors.firt_name && <span>This field is required</span>}
      <input type="text" {...register("last_name")} />
      {errors.last_name && <span>This field is required</span>}
      <input type="number" {...register("age")} />
      {errors.age && <span>This field is required</span>}
      <input type="email" {...register("email")} />
      {errors.email && <span>This field is required</span>}
      <input type="password" {...register("password")} />
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default RegisterComponent;
