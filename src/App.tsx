import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from './Shared/Theme';
import { Routing } from './Shared/Router/Routing';
import store from './Shared/Store/Store';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
