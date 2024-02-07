import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/RootLayout/RootLayout';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import Landing from './pages/Landing/Landing';
import LoginForm from './pages/RegisterForm/LoginForm';
import {Provider} from 'react-redux';
import store from './store/store';
import {CookiesProvider} from 'react-cookie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <Landing />},
      {path: 'login', element: <LoginForm />},
      {path: 'login/register', element: <RegisterForm />}
    ],
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CookiesProvider defaultSetOptions={{path: '/'}}>
      <RouterProvider router={router} />
    </CookiesProvider>
  </Provider>
);
