import React, { FunctionComponent } from 'react';
import { UserRoleEnum } from '../System/SystemTypes';
import { DashboardPage } from '../../Modules/Dashboard/DashboardPage';

export const componentsByRole: Record<UserRoleEnum, { Component: FunctionComponent}> = {
  [UserRoleEnum.User]: { Component: DashboardPage },
};

export const RoleContext = React.createContext(UserRoleEnum.User);
