import React from "react";
import UsersIcon from "../../icons/vendor/user_icon";
import { transactions } from "../admin_components/dashboards/transactionData";
import { Transaction } from "../admin_components/dashboards/recentTransactions";
import MoreInfoIcon from "../../icons/moreinfo";

interface Item {
  id: number;
  name: string;
}

interface Props {
  items: Item[];
  maxLength: number;
}

const TruncateText = ({ items, maxLength }: Props) => {
  // Function to truncate text
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };
};

const Vendor = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      <div className="p-4">
        <h1>Vendors</h1>
      </div>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 rounded-lg bg-base-100 overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="text-right sm:text-left">Email</span>
            <span className="hidden md:grid">Contact</span>
            <span className="hidden md:grid">Method</span>
          </div>
          <ul>
            {transactions.map((transaction: Transaction, index: number) => (
              <li
                key={index}
                className="bg-base-200 hover:bg-base-300 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  items-center justify-between cursor-pointe"
              >
                <div className="flex items-center">
                  <div className="bg-secondary rounded-lg p-3 text-secondary-content">
                    <UsersIcon />
                  </div>
                  <p className="pl-4  text-sm">
                    {transaction.name.first + " " + transaction.name.last}
                  </p>
                </div>
                <p className="text-base-content sm:text-left text-right text-sm">
                  {transaction.name.email.slice(0, 10) + "..."}
                </p>
                <p className="hidden md:flex text-sm">
                  {transaction.name.contact}
                </p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{transaction.method}</p>
                  <MoreInfoIcon />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
