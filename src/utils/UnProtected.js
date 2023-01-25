import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UnProtected ({ children }) {
	const token = Cookies.get('token');
	return !token ? children : <Navigate to="/" replace={true} />;
}