import { useState } from "react";

import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout";

import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import "./LogoutContainer.scss";

const LogoutContainer = () => {
	const [showLogout, setShowLogout] = useState(false);
	const { user, logoutUser } = useDashboardContext();

	return (
		<div className="logoutContainer">
			<button
				type="button"
				className="btn logout-btn"
				onClick={() => setShowLogout(!showLogout)}
			>
				<FaUserCircle />
				{user?.name}
				{/* optional chaining, if user exists, grab the name */}
				<FaCaretDown />
			</button>
			<div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
				<button type="button" className="dropdown-btn" onClick={logoutUser}>
					logout
				</button>
			</div>
		</div>
	);
};
export default LogoutContainer;
