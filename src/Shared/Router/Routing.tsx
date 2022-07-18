import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoutes, SecureRoutes } from './Routes';
import { LoginPage } from '../../Modules/Login/LoginPage';
import { DashboardPage } from '../../Modules/Dashboard/DashboardPage';
import { systemStateSelector } from '../System/State/SystemSelectors';

export const Routing: React.FC = () => {
  const systemState = useSelector(systemStateSelector);

  console.log(systemState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Login} element={<LoginPage />} />
        <Route path="/" element={<SecureRoutes loggedIn />}>
          <Route path={AppRoutes.Dashboard} element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
