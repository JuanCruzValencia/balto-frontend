import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputTypes } from "./types";

const LoginComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputTypes>();

  const onSubmit: SubmitHandler<LoginInputTypes> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      {errors.email && <span>This field is required</span>}
      <input type="password" {...register("password")} />
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default LoginComponent