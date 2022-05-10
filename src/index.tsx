import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, WuiProvider } from '@welcome-ui/core';

const theme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //@ts-ignore
    <WuiProvider theme={theme} >
      <App />
    </WuiProvider>
);
