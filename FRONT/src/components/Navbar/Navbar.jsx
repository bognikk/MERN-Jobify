import Logo from "../UI/Logo/Logo";

import { FaAlignLeft } from "react-icons/fa";
import "./Navbar.scss";
import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout";

const Navbar = () => {
	const { toggleSidebar } = useDashboardContext();
	return (
		<nav className="navbar">
			<div className="nav-center">
				<button type="button" className="toggle-btn" onClick={toggleSidebar}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h4 className="logo-text">dashboard</h4>
				</div>
				<div className="btn-container">toggle/logout</div>
			</div>
		</nav>
	);
};
export default Navbar;
