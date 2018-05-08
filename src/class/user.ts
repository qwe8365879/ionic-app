export interface User{
    id: number;
    userLogin: string;
    userNickName: string;
    userDisplayName: string;
    userEmail: string;
    userAvater?: string;
    token: string;
}