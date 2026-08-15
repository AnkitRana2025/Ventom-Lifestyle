import { Navigate, Outlet } from "react-router"
// import { store } from "../store"
import { useAppSelector } from "../../features/auth/hooks/hook"

const PublicRoute = () => {

  let {user, isLoading} = useAppSelector((state)=>state.auth)

  
  if (isLoading) {
    return null;
  }

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default PublicRoute