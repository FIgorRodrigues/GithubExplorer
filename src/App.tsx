import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <header />
      <div className="container">
        <Routes />
      </div>
      <footer />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
