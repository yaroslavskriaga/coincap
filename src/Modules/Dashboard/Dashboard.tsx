import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';
import { ClearSessionAction, SystemActionTypes } from '../../Shared/System/SystemTypes';
import { clearSession, updateSession } from '../../Shared/System/State/SystemActions';
import { AppRoutes } from '../../Shared/Router/Routes';

export function Dashboard(): ReactElement {
  const dispatch = useDispatch<Dispatch<ClearSessionAction>>();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    const dispatchAction = dispatch as Dispatch<SystemActionTypes>;
    dispatchAction(clearSession());
    navigate(AppRoutes.Login);
  }, []);

  return (
    <>
      Dashboard
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
}
