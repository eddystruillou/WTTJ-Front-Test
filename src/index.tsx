import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, WuiProvider } from '@welcome-ui/core';

const theme = createTheme({
  colors: {
    primary: {
      200: '#FFE166',
      500: '#FFCD00'
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <WuiProvider theme={theme} >
      <App />
    </WuiProvider>
);
