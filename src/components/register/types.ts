import { User } from "@/interfaces";

export type RegisterInputsTypes = {
  first_name: User["firstName"];
  last_name: User["lastName"];
  age: User["age"];
  email: User["email"];
  password: User["password"];
};
