import {
  ReactElement, useCallback, useEffect, useState,
} from 'react';
import { Login } from './Login';
import { LayoutPage } from '../../Shared/Layout/LayoutPage';
import AuthService from '../../Services/Auth-Service';
import { UserInfoInterface } from '../../Shared/System/SystemTypes';

export function LoginPage(): ReactElement {
  const [userData, setUserData] = useState<UserInfoInterface | undefined>();

  const handleLogin = useCallback((): void => {
    AuthService
      .login()
      .then((data: UserInfoInterface) => {
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <LayoutPage centred>
      <Login userData={userData} />
    </LayoutPage>
  );
}
