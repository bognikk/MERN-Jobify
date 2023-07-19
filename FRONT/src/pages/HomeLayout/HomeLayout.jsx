import { Outlet } from "react-router-dom";
import "./HomeLayout.scss";

function HomeLayout() {
	return (
		<div>
			<nav>navbar</nav>
			<Outlet />
		</div>
	);
}
export default HomeLayout;
