import BillIcon from "@/app/auth_routes/icons/dashboards/bills";
import ExclamationIcon from "@/app/auth_routes/icons/dashboards/exclamation";
import UsersIcon from "@/app/auth_routes/icons/dashboards/users_icon";
import React from "react";

type Props = {};

const TopCards = (props: Props) => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-base-100 flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-info">23</p>
          <p className="text-base-content">Total Vendors</p>
        </div>
        <p className="bg-info text-info-content flex items-center justify-center p-2 rounded-lg">
          <span>
            <UsersIcon />
          </span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-base-100 flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-info">76</p>
          <p className="text-base-content">Total Bills</p>
        </div>
        <p className="bg-info text-info-content flex items-center justify-center p-2 rounded-lg">
          <span>
            <BillIcon />
          </span>
        </p>
      </div>
      <div className="bg-base-100 flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-error">24</p>
          <p className="text-base-content">Active Bills</p>
        </div>
        <p className="bg-error text-error-content flex items-center justify-center p-2 rounded-lg">
          <span>
            <ExclamationIcon />
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
