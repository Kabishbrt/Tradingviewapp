import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useChartContext } from "../context/ChartContext";
import Details from "./Details";
import Header from "./Header";
import { InfoHeader } from "./InfoHeader";
import StockChart from "./StockChart";
import Loader from "./Loader";

const Dashboard = ({chartData}) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      } min-h-screen p-4`}
    >
      <Header />


      <div className="flex flex-col md:flex-row justify-start gap-3">

      <div
          className={`flex flex-col justify-start p-1 flex-grow`}
          style={{
            border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
            borderRadius: "8px",
            boxShadow:
              "rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px",
          }}
        >
          <InfoHeader ticker={chartData.ticker} />
          <div className="responsive-container">

            <StockChart chartData={chartData} />
          </div>
        </div>
        <div
          className={`flex justify-center items-center h-fit`}
          style={{
            borderRadius: "8px",
            boxShadow:
              "rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px",
          }}
        >
          <Details />
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
