import { Navigate, Outlet } from 'react-router-dom';

export enum AppRoutes {
    Login = '/login',
    Dashboard = '/dashboard'
}

export const SecureRoutes = ({ loggedIn }: { loggedIn: boolean }) => (loggedIn ? <Outlet /> : <Navigate to={AppRoutes.Login} />);
