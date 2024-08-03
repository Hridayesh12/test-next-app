import { useTheme } from "@/context/ThemeContext";
import React from "react";
import TopCards from "./admin_components/dashboards/topCards";
import BarChart from "./admin_components/dashboards/barChart";
import RecentTransactions from "./admin_components/dashboards/recentTransactions";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
