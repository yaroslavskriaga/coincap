import { SystemStateInterface, SystemStateSelectorInterface, UserRoleEnum } from '../SystemTypes';

export const systemStateSelector = ({ System }: SystemStateSelectorInterface) => System;

export const getUserRole = (systemState: SystemStateInterface) => (systemState.userInfo ? systemState.userInfo.role : undefined);

export const getUserRoleByString = (dataRole: string) => {
  let role: UserRoleEnum;
  switch (dataRole.split(' ')[0]) {
    case UserRoleEnum.User:
      role = UserRoleEnum.User;
      break;
    default:
      throw new Error('User role is not supported');
  }

  return role;
};
