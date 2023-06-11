import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

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
    errorElement: <ErrorPage />,
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
        path: 'product',
        element: <ProductPage />,
        children: [
          {
            path: ':slug',
            element: <ProductDetailsPage />,
          },
        ],
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
