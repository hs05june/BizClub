import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './Pages/styles/GlobalStyle';
// dgdh
// import {}
import {AuthProvider} from "./context/contextapi"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

