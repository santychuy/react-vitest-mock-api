import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import Home from './components/page/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
