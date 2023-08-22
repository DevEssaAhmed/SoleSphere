import { useEffect } from 'react';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Nav from './components/Nav/Nav';
import PrivateRoute from './utils/PrivateRoute';
import OrderPage from './pages/OrderPage/OrderPage';
import UserProfile from './pages/UserProfile/UserProfile';
import AdminRoute from './utils/AdminRoute';
import OrderListPage from './pages/admin/OrderListPage';
import ProductsListPage from './pages/admin/ProductsListPage';
import ProductEditPage from './pages/admin/ProductEditPage';
import UserListPage from './pages/admin/UserListPage';
import UserEditPage from './pages/admin/UserEditPage';

const AppLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes('/login');
  const isSignupPage = location.pathname.includes('/signup');

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  if (isLoginPage || isSignupPage) {
    return (
      <div>
        <ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        <Helmet>
          <title>SoleSphere</title>
          <meta name='description' content='curated sneakers store' />
          {/* Add more meta tags as needed */}
        </Helmet>
        <Outlet />
      </div>
    );
  }
  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Helmet>
        <title>SoleSphere</title>
        <meta name='description' content='curated sneakers store' />
        {/* Add more meta tags as needed */}
      </Helmet>
      <Nav />
      <ScrollToTop />
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
        path: 'products',
        element: <ProductPage />,
        children: [
          {
            path: 'page/:pageNumber',
            element: <ProductPage />,
          },
        ],
      },
      {
        path: 'products/:id',
        element: <ProductDetailsPage />,
      },

      {
        path: 'cart',
        element: <CartPage />,
      },
      // {
      //   path: 'checkout',
      //   element: <CheckoutPage />,
      // },
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: 'checkout',
            element: <CheckoutPage />,
          },
          {
            path: 'order/:id',
            element: <OrderPage />,
          },
          {
            path: 'profile',
            element: <UserProfile />,
          },
        ],
      },
      {
        path: 'admin',
        element: <AdminRoute />,
        children: [
          {
            path: 'users',
            element: <UserListPage />,
          },
          {
            path: 'user/:id/edit',
            element: <UserEditPage />,
          },
          {
            path: 'orderlist',
            element: <OrderListPage />,
          },
          {
            path: 'products',
            element: <ProductsListPage />,
            children: [
              {
                path: ':pageNumber',
              },
            ],
          },
          {
            path: 'product/:id/edit',
            element: <ProductEditPage />,
          },
        ],
      },
      {
        path: 'search/:keyword',
        element: <ProductPage />,
        children: [
          {
            path: 'page/:pageNumber',
            element: <ProductPage />,
          },
        ],
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
