import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout";

import { NavLink } from "react-router-dom";

import links from "../../utils/links";
import "./NavLinks.scss";

const NavLinks = () => {
	const { toggleSidebar, user } = useDashboardContext();
	return (
		<div className="nav-links">
			{links.map((link) => {
				const { text, path, icon } = link;
				return (
					<NavLink
						to={path}
						key={text}
						className="nav-link"
						onClick={toggleSidebar}
						end
					>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};
export default NavLinks;
