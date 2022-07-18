import { ReactElement } from 'react';
import { Login } from './Login';
import { LayoutPage } from '../../Shared/Layout/LayoutPage';
import AuthService from '../../Services/Auth-Service';

export function LoginPage(): ReactElement {
  function login() {
    return AuthService
      .login()
      .then((data: any) => {
        console.log(data);
      });
  }

  login();

  return (
    <LayoutPage centred>
      <Login />
    </LayoutPage>
  );
}
