import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout";
import NavLinks from "../NavLinks/NavLinks";

import Logo from "../UI/Logo/Logo";

import { FaTimes } from "react-icons/fa";
import "./SmallSidebar.scss";

const SmallSidebar = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext();

	return (
		<aside className="smallSidebar">
			<div
				className={
					showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
				}
			>
				<div className="content">
					<button type="button" className="close-btn" onClick={toggleSidebar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks />
				</div>
			</div>
		</aside>
	);
};
export default SmallSidebar;
