import { Link } from "react-router-dom";

import "./Register.scss";

function Register() {
	return (
		<>
			<h1>Register Page</h1>
			<Link to="/login">Login Page</Link>
		</>
	);
}
export default Register;
