import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../store/hooks';

const PrivateRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;
