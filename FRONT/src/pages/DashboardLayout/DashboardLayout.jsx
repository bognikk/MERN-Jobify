import { useContext, useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import BigSidebar from "../../components/BigSidebar/BigSidebar";
import SmallSidebar from "../../components/SmallSidebar/SmallSidebar";
import Navbar from "../../components/Navbar/Navbar";

import "./DashboardLayout.scss";

const DashboardContext = createContext();

function DashboardLayout() {
	const user = { name: "john" };

	const [showSidebar, setShowSidebar] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleDarkTheme = () => {
		console.log("toggle dark theme");
	};

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	const logoutUser = async () => {
		console.log("logiut user");
	};

	return (
		<DashboardContext.Provider
			value={{
				user,
				showSidebar,
				isDarkTheme,
				toggleDarkTheme,
				toggleSidebar,
				logoutUser,
			}}
		>
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
		</DashboardContext.Provider>
	);
}

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
