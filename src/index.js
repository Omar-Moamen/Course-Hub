import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/RootLayout/RootLayout';
import LoginForm from './pages/Login/LoginForm';
import {Provider} from 'react-redux';
import store from './store/store';
import {CookiesProvider} from 'react-cookie';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ParentSignUp from './pages/SignUp/ParentSignUp';
import InstructorSignUp from './pages/SignUp/InstructorSignUp';
import Index from './pages/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Index />},
      {path: 'login', element: <LoginForm />},
      {path: 'parent-signup', element: <ParentSignUp />},
      {path: 'instructor-signup', element: <InstructorSignUp />}
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
