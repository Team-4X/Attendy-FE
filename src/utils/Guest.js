import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Guest ({ children }) {
	// const token = Cookies.get('token');
	// return !token ? children : <Navigate to="/" replace={true} />;
	const auth = useSelector((state) => state.auth);

	return !auth.isAuthenticated ? children : <Navigate to="/" />;
}