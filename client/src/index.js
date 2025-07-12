import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ 
    user: new UserStore(),
    device: new DeviceStore()
     }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);