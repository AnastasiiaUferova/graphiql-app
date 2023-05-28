import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './input.css';
import './i18n';
import Spinner from 'components/Spinner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spinner centered />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
