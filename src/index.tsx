import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme } from '@welcome-ui/core';
import { ThemeProvider } from '@xstyled/styled-components'

const theme = createTheme()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
);
