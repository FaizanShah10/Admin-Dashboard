import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout, { AuthLayout } from '../App';
import ECommerce from '../Dashboard/ECommerce';
import Orders from '../Pages/Orders';
import Customers from '../Pages/Customers';
import Employees from '../Pages/Employees';
import Kanban from '../Apps/Kanban';
import Editor from '../Apps/Editor/Editor';
import Calender from '../Apps/Calender';
import ColorPicker from '../Apps/ColorPicker';
import Line from '../Charts/Line';
import Area from '../Charts/Area';
import Pie from '../Charts/Pie';
import Bar from '../Charts/Bar';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

import ProtectedRoute from "./ProtectedRoute";


const router = createBrowserRouter([
  // Auth Routes
  {
    path: '/login',
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: '/signup',
    element: (
      <AuthLayout>
        <Signup />
      </AuthLayout>
    ),
  },

  // Main App Routes
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/login" replace /> },

      { path: '/ecommerce', element: <ECommerce /> },
      { path: '/orders', element: <Orders /> },
      { path: '/employees', element: <Employees /> },
      { path: '/customers', element: <Customers /> },
      { path: '/kanban', element: <Kanban /> },
      { path: '/editor', element: <Editor /> },
      { path: '/calendar', element: <Calender /> },
      { path: '/color-picker', element: <ColorPicker /> },
      { path: '/line', element: <Line /> },
      { path: '/area', element: <Area /> },
      { path: '/bar', element: <Bar /> },
      { path: '/pie', element: <Pie /> },
    ],
  },
]);

export default router;
