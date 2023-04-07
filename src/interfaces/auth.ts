export interface IuserSignin {
    email: string;
    password: string;
}
export interface IUserSignup {
    accessToken?: string;
    name : string;
    email: string;
    password: string;
    confirmPassword: string;

}