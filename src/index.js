import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/RootLayout/RootLayout';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import Landing from './pages/Landing/Landing';
import SignInForm from './pages/RegisterForm/SignInForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <Landing />},
      {path: 'signIn', element: <SignInForm />},
      {path: 'signIn/register', element: <RegisterForm />}
    ],
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
