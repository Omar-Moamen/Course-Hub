import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/RootLayout/RootLayout';
import LoginForm from './pages/Login/LoginForm';
import {Provider} from 'react-redux';
import store from './store/store';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ParentSignUp from './pages/SignUp/ParentSignUp';
import InstructorSignUp from './pages/SignUp/InstructorSignUp';
import Index from './pages/Index';
import ActivatePage from './pages/ActivatePage/ActivatePage';
import {HelmetProvider} from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Index />},
      {path: 'login', element: <LoginForm />},
      {path: 'parent-signup', element: <ParentSignUp />},
      {path: 'instructor-signup', element: <InstructorSignUp />},
      {path: 'activate', element: <ActivatePage />},
    ],
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
