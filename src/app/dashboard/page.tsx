"use client";
import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import dashboard_data from "../../../server/dashboard.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  BarElement
);

const Dashboard = () => {
  const [data, setData] = useState(dashboard_data);
  if (!data) return <div>Loading...</div>;

  const monthlyVisitsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Visits",
        data: data.monthlyVisits,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const contactFormSubmissionsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Contact Form Submissions",
        data: data.contactFormSubmissionsOverTime,
        backgroundColor: "#6d28d9",
        borderColor: "#4f46e5",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            Website Visits
          </h2>
          <p className="text-4xl font-bold text-blue-600">{data.visits}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            Average Interaction Time
          </h2>
          <p className="text-4xl font-bold text-green-600">
            {data.avgInteractionTime}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            Contact Form Submissions
          </h2>
          <p className="text-4xl font-bold text-purple-600">
            {data.contactFormSubmissions}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Monthly Visits
          </h2>
          <Line
            data={monthlyVisitsData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true },
                tooltip: {
                  callbacks: { label: (context) => `Visits: ${context.raw}` },
                },
              },
            }}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Contact Form Submissions Over Time
          </h2>
          <Bar
            data={contactFormSubmissionsData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true },
                tooltip: {
                  callbacks: {
                    label: (context) => `Submissions: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Career Applications
        </h2>
        <ul className="divide-y divide-gray-200">
          {Object.entries(data.careerApplications).map(([role, count]) => (
            <li key={role} className="flex justify-between py-3 text-gray-600">
              <span className="font-medium">{role}</span>
              <span className="font-semibold">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
