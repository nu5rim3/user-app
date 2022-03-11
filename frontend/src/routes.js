import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import HomeLayout from './layouts/Home';
import AuthLayout from './layouts/Auth';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProfileList from './pages/ProfileList';

export default function Router() {
    return useRoutes([
      {
        path: '/app',
        element: <HomeLayout />,
        children: [
          { path: 'home', element: <Home /> },
          { path: 'login', element: <Login /> },
          { path: 'profile', element: <Profile /> },
          { path: 'List', element: <ProfileList /> },
        ]
      },
      {
        path: '/',
        element: <AuthLayout  />,
        children: [
          { path: '/', element: <Login /> },
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
        //   { path: '404', element: <NotFound /> },
        //   { path: '*', element: <Navigate to="/404" /> }
        ]
      },
    //   { path: '*', element: <Navigate to="/404" replace /> }
    ]);
  }
  