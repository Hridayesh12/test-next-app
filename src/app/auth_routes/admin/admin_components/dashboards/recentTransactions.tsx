import React from "react";
import { transactions } from "./transactionData";
import CashIcon from "@/app/auth_routes/icons/dashboards/cashIcon";
interface Name {
  first: string;
  last: string;
  email: string;
  website: string;
  contact: string;
}

export interface Transaction {
  id: number;
  name: Name;
  total: number;
  status: "Pending" | "Paid";
  method: "PayPal" | "Gpay" | "Credit Card" | string; // Include other payment methods if needed
  date: string; // For relative time, e.g., "15 minutes ago"
}

const RecentTransactions = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg overflow-auto bg-base-100">
      <h1 className="text-base-content">Recent Transactions</h1>
      <ul>
        {transactions.map((transaction: Transaction, index: number) => (
          <li
            key={transaction.id}
            className="bg-base-200 hover:bg-base-300 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-secondary rounded-lg p-3 text-secondary-content">
              <CashIcon />
            </div>
            <div className="pl-4">
              <p className="text-base-content font-bold">
                ${transaction.total}
              </p>
              <p className="text-base-content text-sm">
                {transaction.name.first}
              </p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {transaction.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
