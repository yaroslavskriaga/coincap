import { SystemStateInterface, UserInfoInterface } from '../SystemTypes';

export const INITIAL_STATE: SystemStateInterface = {
  loggedIn: false,
  userInfo: <UserInfoInterface>{},
};
