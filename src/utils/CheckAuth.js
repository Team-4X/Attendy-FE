import { useSelector } from 'react-redux';
import Navigate from "react";

export default function CheckAuth ({ children }) {
	// const token = Cookies.get('token');

	// async function fetchUser() {
	// 	const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/user`, {
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	});

	// 	if (!res.ok) {
	// 		redirect('/auth/login');
	// 	}

	// }

	// useEffect(() => {fetchUser();}, []);

	// return token ? isAuthenticated : <Navigate to="/auth/login" replace={true} />;
	const auth = useSelector((state) => state.auth);
	console.log(auth);
	return auth.isAuthenticated ? children : <Navigate to="/auth/login" />;
}