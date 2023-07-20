import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout";

import NavLinks from "../NavLinks/NavLinks";
import Logo from "../UI/Logo/Logo";

import "./BigSidebar.scss";

const BigSidebar = () => {
	const { showSidebar } = useDashboardContext();

	return (
		<aside className="bigSidebar">
			<div
				className={
					showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
				}
			>
				<div className="content">
					<header>
						<Logo />
					</header>
					<NavLinks isBigSidebar />
				</div>
			</div>
		</aside>
	);
};
export default BigSidebar;
