import { useAppSelector } from '@/redux/hooks';
import { Navigate } from 'react-router-dom';

type PropsType = {
  children: React.ReactNode;
};

function ProtectedRoute(props: PropsType) {
  const user = useAppSelector((state) => state.auth.user);
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return props.children;
}

export default ProtectedRoute;
