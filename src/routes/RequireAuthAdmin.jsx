import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RequireAuthAdmin() {
  const { auth } = useAuth();
  return (
    auth?.access_token && auth?.userData?.u_role === 'SUPER_ADMIN'
      ? <Outlet />
      : <Navigate to="/adminlogin" />
  );
}

export default RequireAuthAdmin;
