import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const PrivacyPolicy = () => {
    return (
        <>
        <NavBar/>
        <div className="box mt-3 mx-3 mb-4 p-5">
            <h1 className="title is-2">
                Privacy Policy for Attendance Management System
            </h1>
            <p>
            At Attendy, we are committed to protecting the privacy of our users. This privacy policy explains how we collect, use, and protect your personal information when you use our attendance management system.

            </p>

            <h2 className="title is-4 mt-2 mb-1">
            Information We Collect
            </h2>
            <p>
            We collect personal information such as the names of students and teachers and their attendance records in our database. We only allow properly authenticated administrators to edit this information. We do not collect any other personally identifiable information from our users.

            </p>

            <h2 className="title is-4 mt-2 mb-1">How We Use Your Information</h2>
            <p>
            We use the information we collect to provide our attendance management system to you. We do not share or sell any of the information we collect with third parties. The information we collect is used solely for the purpose of managing attendance records and providing relevant information to properly authenticated administrators.

            </p>

            <h2 className="title is-4 mt-2 mb-1">Protection of Your Information</h2>
            <p>
            We take appropriate security measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security technologies and procedures to protect your personal information. We store your personal information on a secure server located in a controlled environment.

            </p>

            <h2 className="title is-4 mt-2 mb-1">Your Rights</h2>
            <p>
            You have the right to access, correct, and delete your personal information stored in our attendance management system. If you have any questions or concerns about your personal information, please contact us at 'attendyams@gmail.com'. We will respond to your request within a reasonable timeframe.

            </p>

            <h2 className="title is-4 mt-2 mb-1">Changes to Our Privacy Policy</h2>
            <p>
            We reserve the right to make changes to our privacy policy at any time. Any changes will be posted on our website and will become effective immediately upon posting.

            </p>

            <h2 className="title is-4 mt-2 mb-1">Contact Us</h2>
            <p>
            If you have any questions or concerns about our privacy policy, please contact us at 'attendyams@gmail.com'.

            </p>

            <p>
            Thank you for choosing our attendance management system. We appreciate your trust and we are committed to protecting your privacy.
            </p>
        </div>
        <Footer/>
        </>
    )
}