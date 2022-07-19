import React, {
  ReactElement, useCallback,
} from 'react';
import { Paper } from '@mui/material';
import { Form, Formik } from 'formik';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SystemActionTypes, UpdateSessionAction, UserInfoInterface } from '../../Shared/System/SystemTypes';
import { updateSession } from '../../Shared/System/State/SystemActions';
import { getUserRoleByString } from '../../Shared/System/State/SystemSelectors';
import { LoginInitialValues, LoginValidationSchema } from './Utils/LoginHelpers';
import { LoginFormFields } from './LoginFormFields';
import { LoginInitialValuesInterface } from './Utils/LoginInterfaces';
import { isEmpty } from '../../Shared/Utils/Helpers';
import { AppRoutes } from '../../Shared/Router/Routes';

interface LoginInterface {
  userData: UserInfoInterface | undefined
}

export function Login({ userData }: LoginInterface): ReactElement {
  const dispatch = useDispatch<Dispatch<UpdateSessionAction>>();
  const navigate = useNavigate();

  const isValidUser = useCallback(
    (values: LoginInitialValuesInterface):boolean => (userData && !isEmpty(userData) ? values.email === userData.email : false),
    [userData],
  );

  return (
    <Paper elevation={3}>
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={async (values: LoginInitialValuesInterface) => {
          const dispatchAction = dispatch as Dispatch<SystemActionTypes>;
          if (userData && isValidUser(values)) {
            const role = getUserRoleByString(userData.role);
            const userInfo = {
              ...userData,
              role,
            };
            dispatchAction(updateSession(userInfo));
            navigate(AppRoutes.Dashboard);
          } else {
            alert('no such user');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <LoginFormFields errors={errors} touched={touched} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
