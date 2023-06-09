import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  // { path: "outlet", element: <Navbar /> },

  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "/about",
      //   element: <AboutPage />,
      // },
      {
        path: 'shop',
        // element: <ShopPage />,
        children: [],
      },
      {
        path: 'shop/:category',
        // element: <CategoryPage />,
      },
      {
        path: 'checkout',
        // element: <CheckoutPage />,
      },
    ],
  },
  {
    path: '/login',
    // element: <LoginPage />,
  },
  {
    path: '/signup',
    // element: <SignupPage />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
