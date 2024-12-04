import { Navigate } from 'react-router-dom';
import { AuthStatus, AppRoutes } from '../../const';

type AuthStatusType = typeof AuthStatus[keyof typeof AuthStatus];

type PrivateRouteProps = {
  authStatus: AuthStatusType;
  children: JSX.Element;
}

export default function PrivateRoute({authStatus, children}: PrivateRouteProps) {
  return (
    authStatus === AuthStatus.Auth ? children :
      <Navigate to={AppRoutes.Login}/>
  );
}
