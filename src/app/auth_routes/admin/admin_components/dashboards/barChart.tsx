"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
type Props = {};

const BarChart = (props: Props) => {
  const [chartData, setChartData]: ChartData<"bar"> | any = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions]: ChartOptions<"bar"> | any = useState(
    {}
  );

  useEffect(() => {
    setChartData({
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
          label: "Active Bills",
          data: [30, 45, 60, 70, 90, 100, 110, 95, 80, 85, 75, 65],
          backgroundColor: "#3b82f6", // Tailwind's bg-blue-500
          borderColor: "#2563eb", // Tailwind's bg-blue-600
          borderWidth: 1,
        },
        {
          label: "Pending Bills",
          data: [20, 35, 50, 60, 80, 90, 100, 85, 70, 75, 65, 55],
          backgroundColor: "#10b981", // Tailwind's bg-green-500
          borderColor: "#047857", // Tailwind's bg-green-700
          borderWidth: 1,
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            color: "#3b82f6", // Tailwind's text-blue-500
            font: {
              size: 14, // Font size of legend labels
            },
          },
        },
        title: {
          display: true,
          text: "Monthly Bills",
          color: "#3b82f6", // Tailwind's text-blue-500
          font: {
            size: 20, // Font size of the title
          },
          padding: {
            bottom: 20,
          },
        },
        tooltip: {
          callbacks: {
            label: (context: any) => `${context.dataset.label}: ${context.raw}`,
          },
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: "#3b82f6", // Tailwind's text-blue-500
          },
          grid: {
            color: "#e2e8f0", // Lighter shade for grid lines
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: "#3b82f6", // Tailwind's text-blue-500
          },
          grid: {
            color: "#e2e8f0", // Lighter shade for grid lines
          },
        },
      },
      maintainAspectRatio: false,
    });
  }, []);
  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-base-100">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
