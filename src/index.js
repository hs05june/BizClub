import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './Pages/styles/GlobalStyle';
// dgdh

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
=======
      <App />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

