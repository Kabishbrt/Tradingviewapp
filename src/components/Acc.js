import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useChartContext } from "../context/ChartContext";
import Details from "./Details";
import Header from "./Header";
import { InfoHeader } from "./InfoHeader";
import StockChart from "./StockChart";
import Loader from "./Loader";
import Dashboard from "./Dashboard";
import SpinLoader from "./SpinnerLoader";

export const Acc = () => {
    const { chartData, loading, error } = useChartContext();

    if (loading) {
      return <SpinLoader/>
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  return (
    <>
    <Dashboard chartData = {chartData} />
    </>
  )
}
