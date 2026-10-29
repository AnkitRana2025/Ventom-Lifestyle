import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../features/auth/hooks/hook";

const PublicRoute = () => {
  const { user, isLoading } = useAppSelector(
    (store) => store.auth
  );

  if (isLoading) {
    return null;
  }

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;