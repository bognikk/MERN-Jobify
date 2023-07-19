import { Outlet } from "react-router-dom";

import BigSidebar from "../../components/BigSidebar/BigSidebar";
import SmallSidebar from "../../components/SmallSidebar/SmallSidebar";
import Navbar from "../../components/Navbar/Navbar";

import "./DashboardLayout.scss";

function DashboardLayout() {
	return (
		<section className="dashboardLayout">
			<main className="dashboard">
				<SmallSidebar />
				<BigSidebar />
				<div>
					<Navbar />
					<div className="dashboard-page">
						<Outlet />
					</div>
				</div>
			</main>
		</section>
	);
}
export default DashboardLayout;
