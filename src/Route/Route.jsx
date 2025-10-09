import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import { ErrorBoundary } from '../Components/ErrorBoundary';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import AppDetails from '../Components/AppDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation/:id',
        Component: Installation,
      },
      {
        path: '/app/:id',
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
