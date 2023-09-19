import React from "react";
import DashboardCategoryCard from "../../components/dashboard-category-card/dashboard-category-card.component";
import {
  IconBill,
  IconMainCourse,
  IconMoneyEuro,
} from "../../components/icons";
import DatePicker from "../../components/date-picker/date-picker.component";
import BarChart from "../../components/bar-chart/bar-chart.component";
import DashboardVehicleCard from "../../components/dashboard-vehicle-card/dashboard-vehicle-card.component";
import DashboardProductCard from "../../components/dashboard-product-card/dashboard-product-card.component";

const Dashboard = () => (
  <div>
    <div className="flex flex-row justify-between">
      <h3 className="text-2xl">Dashboard</h3>
      <DatePicker />
    </div>
    <div className="grid grid-cols-1 gap-4">
      <div className="my-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex h-40 w-full items-center justify-center">
          <DashboardCategoryCard
            icon={<IconMoneyEuro />}
            title="Revenue"
            value="$1200.00"
          />
        </div>

        <div className="flex h-40 w-full items-center justify-center">
          <DashboardCategoryCard
            cardColor="bg-indigo-200"
            icon={<IconBill />}
            title="Orders Completed"
            value="200"
          />
        </div>

        <div className="flex h-40 w-full items-center justify-center">
          <DashboardCategoryCard
            cardColor="bg-pink-200"
            icon={<IconMainCourse />}
            title="Dishes Sold"
            value="200"
          />
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 border rounded-lg border-violet-200">
        <div className="flex h-80 w-full items-center justify-center">
          <BarChart />
        </div>
      </div>

      <div className="my-4 grid grid-cols-1 md:grid-cols-2  gap-4">
        <div className="flex w-full items-center justify-center border rounded-lg border-violet-200 p-2">
          <DashboardVehicleCard />
        </div>
        <div className="flex w-full items-center justify-center border rounded-lg border-violet-200 p-2">
          <DashboardProductCard />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
