import { Navigate, Outlet } from 'react-router-dom';
import {
  Box, Fade, LinearProgress, Link,
} from '@mui/material';
import store from '../Store/Store';

export enum AppRoutes {
    Login = '/login',
    Dashboard = '/dashboard'
}

function SplashView() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex="tooltip"
      position="fixed"
      style={{ backgroundColor: 'white' }}
    >
      <div style={{ width: 318, textAlign: 'center' }}>
        Page is not available. Please
        {' '}
        <Link href={AppRoutes.Login} underline="hover">
          Login
        </Link>
        <Box my={3} />
        <LinearProgress />
        <Box my={3} />
      </div>
    </Box>
  );
}

export const SecureRoutes = ({ loggedIn }: { loggedIn: boolean }) => (loggedIn ? <Outlet /> : (<SplashView />));
