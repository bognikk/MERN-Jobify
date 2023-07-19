import { Link } from "react-router-dom";

import Logo from "../../components/UI/Logo/Logo";
import FormRow from "../../components/FormRow/FormRow";

import "./Register.scss";

function Register() {
	return (
		<section className="registerPage">
			<form className="form">
				<Logo />
				<h4>Register</h4>
				<FormRow type="text" name="name" defaultValue="john" />
				<FormRow
					type="text"
					name="lastName"
					labelText="Last Name"
					defaultValue="smith"
				/>
				<FormRow type="text" name="location" defaultValue="earth" />
				<FormRow type="email" name="email" defaultValue="john@gmail.com" />
				<FormRow type="password" name="password" defaultValue="secret123" />
				<button type="submit" className="btn btn-block">
					submit
				</button>
				<p>
					Alredy a member?
					<Link to="/login" className="member-btn">
						Login
					</Link>
				</p>
			</form>
		</section>
	);
}
export default Register;
