import { Link } from "react-router-dom";

import Logo from "../../components/UI/Logo/Logo";
import FormRow from "../../components/FormRow/FormRow";

import "./Login.scss";

function Login() {
	return (
		<section className="loginPage">
			<form className="form">
				<Logo />
				<h4>Login</h4>
				<FormRow type="email" name="email" defaultValue="john@gmail.com" />
				<FormRow type="password" name="password" defaultValue="secret123" />
				<button type="submit" className="btn btn-block">
					submit
				</button>
				<button type="button" className="btn btn-block">
					explore the app
				</button>
				<p>
					Not a member yet?
					<Link to="/register" className="member-btn">
						Register
					</Link>
				</p>
			</form>
		</section>
	);
}
export default Login;
