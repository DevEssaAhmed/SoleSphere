import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
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

const AppLayout = () => {
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
        children: [],
      },
      {
        path: 'products/:slug',
        element: <ProductDetailsPage />,
      },

      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
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
