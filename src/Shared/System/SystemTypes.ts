export const UPDATE_USERINFO = 'UPDATE_USERINFO';

export enum UserRoleEnum {
    User = 'USER'
}

export type UserInfoInterface = {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    balance: number;
    KYC: boolean;
}

export interface SystemStateInterface {
    loggedIn: boolean;
    userInfo: UserInfoInterface;
}

export interface SystemStateSelectorInterface {
    System: SystemStateInterface
}
