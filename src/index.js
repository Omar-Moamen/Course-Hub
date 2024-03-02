import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/RootLayout/RootLayout';
import Landing from './pages/Landing/Landing';
import LoginForm from './pages/Login/LoginForm';
import {Provider} from 'react-redux';
import store from './store/store';
import {CookiesProvider} from 'react-cookie';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ParentSignUp from './pages/SignUp/ParentSignUp';
import InstructorSignUp from './pages/SignUp/InstructorSignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Landing />},
      {path: 'login', element: <LoginForm />},
      {path: 'parent-signup', element: <ParentSignUp />},
      {path: 'instructor-signup', element: <InstructorSignUp />}
    ],
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider defaultSetOptions={{path: '/'}}>
        <RouterProvider router={router} />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);
