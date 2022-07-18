import { AxiosResponse } from 'axios';
import { API_USERS } from '../Api/Api';
import {
  localGet,
} from './HTTP-Service';
import { UserRoleEnum } from '../Shared/System/SystemTypes';

const login = (): Promise<UserRoleEnum> => localGet(API_USERS)
  .then((data: AxiosResponse) => data.data);

const AuthService = {
  login,
};

export default AuthService;
