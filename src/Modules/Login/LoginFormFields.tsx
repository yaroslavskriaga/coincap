import React, { ReactElement } from 'react';
import { Field, Form } from 'formik';
import { Box } from '@mui/material';

export function LoginFormFields({ errors, touched }: any): ReactElement {
  return (
    <>
      <Box>
        <label>email</label>
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
      </Box>
      <Box>
        <label>password</label>
        <Field type="password" name="password" />
        {errors.password && touched.password ? (
          <div>{errors.password}</div>
        ) : null}
      </Box>
    </>
  );
}
