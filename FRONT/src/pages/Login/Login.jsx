import { Link } from "react-router-dom";

import "./Login.scss";

function Login() {
	return (
		<>
			<h1>Login Page</h1>
			<Link to="/register">Register Page</Link>
		</>
	);
}
export default Login;
