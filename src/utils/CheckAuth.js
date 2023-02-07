import { useSelector } from 'react-redux';
import {Login} from "../components/Login";
import Navigate from "react";

export default function CheckAuth ({ children }) {
	const auth = useSelector((state) => state.auth);
	console.log(auth);
	// return auth.isAuthenticated ? children : <Navigate to="/auth/login" />;
	return auth.isAuthenticated ? children : <Login/>;
}