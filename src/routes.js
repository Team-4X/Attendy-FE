import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {Login} from "./components/Login.js";
import {SignUp} from "./components/SignUp";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {ContactUs} from "./components/ContactUs";
import {Student} from "./components/Student";
import {StudentManage} from "./components/StudentManage";
import {TeacherInfo} from "./components/TeacherInfo";
import {StaffManage} from "./components/StaffManage";
import {MarkAttendance} from "./components/MarkAttendance";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

import CheckAuth from "./utils/CheckAuth";
import Guest from "./utils/Guest";
import { AdminMessages } from "./components/AdminMessages";

export default createBrowserRouter([
	{
		element: <App />,
		children: [
		{
			path: "/",
			element: (
				<Home/>
			),
		},
		{
			path: "/auth/login",
			element: (
				<Guest>
					<Login/>
				</Guest>
			),
		},		
		{
			path: "/auth/register",
			element: (
				<Guest>
					<SignUp/>
				</Guest>
			),
		},
		{
			path: "/about",
			element: (
				<About/>
			),
		},
		{
			path: "/contact",
			element: (
				<ContactUs/>
			),
		},
		{
			path: "/student",
			element: (
				<Student/>
			),
		},
						{
			path: "/student-manage",
			element: (
				<CheckAuth>
					<StudentManage/>
				</CheckAuth>
			),
		},
		{
			path: "/staff-manage",
			element: (
				<CheckAuth>
					<StaffManage/>
				</CheckAuth>
			),
		},
		{
			path: "/staff",
			element: (
				<TeacherInfo/>
			),
		},
		{
			path: "/mark-attendance",
			element: (
				<MarkAttendance/>
			),
		},
		{
			path: "/privacy-policy",
			element: (
				<PrivacyPolicy/>
			)
		},
		{
			path: "/admin-messages",
			element: (
				<AdminMessages/>
			)
		},
		]

	}
])