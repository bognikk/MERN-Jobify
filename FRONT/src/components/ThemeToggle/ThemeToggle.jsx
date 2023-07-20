import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../../pages/DashboardLayout/DashboardLayout";

import "./ThemeToggle.scss";

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

	return (
		<button className="themeToggleButton" onClick={toggleDarkTheme}>
			{isDarkTheme ? (
				<BsFillSunFill className="toggle-icon" />
			) : (
				<BsFillMoonFill />
			)}
		</button>
	);
};
export default ThemeToggle;
