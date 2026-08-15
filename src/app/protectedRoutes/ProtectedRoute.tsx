import { Navigate, Outlet } from "react-router"
// import { store } from "../store"
import { useAppSelector } from "../../features/auth/hooks/hook"

const ProtectedRoute = () => {

  let {user, isLoading} = useAppSelector((state)=>state.auth)

  
  if (isLoading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute