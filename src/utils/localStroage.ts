import { IuserSignin } from "../interfaces/auth";

export const authenticated = (user: IuserSignin) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const isAuthenticate = () => {
  if (!localStorage.getItem("user")) return;
  return JSON.parse(localStorage.getItem("user") as string);
};