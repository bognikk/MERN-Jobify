import { Outlet } from "react-router-dom";
import "./HomeLayout.scss";

function HomeLayout() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
export default HomeLayout;
