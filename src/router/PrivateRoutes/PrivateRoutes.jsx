import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/Shared/Loading';
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { loading, users } = useAuth();

    if (loading) {
        return <Loading></Loading>;
    }

    if (!users) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;