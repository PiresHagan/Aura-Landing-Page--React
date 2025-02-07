import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import LandingLayout from './layouts/LandingLayout';

import UsersPage from './pages/UsersPage';
import ConversationPage from './pages/ConversationPage';
import MainLanding from './landings/MainLanding';
import TOS from './landings/TOS';
import Privacy from './landings/Privacy';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <UsersPage />,
      },
      {
        path: '/conversations',
        element: <ConversationPage />,
      },
    ],
  },
  {
    path: '/landings',
    element: <LandingLayout />,
    children: [
      {
        path: '/landings/main',
        element: <MainLanding />,
      },
      {
        path: '/landings/TOS',
        element: <TOS />,
      },
      {
        path: '/landings/privacy',
        element: <Privacy />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
