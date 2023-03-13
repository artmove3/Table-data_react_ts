import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PageState } from './context/PageContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<PageState>
  <App />
</PageState>
);
