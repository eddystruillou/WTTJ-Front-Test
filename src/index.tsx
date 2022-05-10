import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WuiProvider, createTheme } from '@welcome-ui/core';

const theme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <WuiProvider theme={theme} >
      <App />
    </WuiProvider>
);
