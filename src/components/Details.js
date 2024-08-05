import React, { useContext, useState } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css";
import { Select } from "./Select";

const Details = () => {
  const { darkMode } = useContext(ThemeContext);
  const cellBorderDarkMode = darkMode ? "border-b border-gray-600" : "border-b border-gray-300";

  // Demo data for breakout details (array of objects)
  const breakoutDetails = [
    { title: "Symbol", key: "ticker" },
    { title: "Close", key: "Close" },
    { title: "Price Change", key: "PriceChange" },
    { title: "Change %", key: "Change" },
    { title: "Market Cap", key: "MarketCap" },
    { title: "Volume", key: "Volume" },
  ];

  const BreakoutReportsData = [
    {
      ticker: 'MSFT',
      brokeOut: false,
      breakingOut: true,
      breakingDown: false,
      timeframe: 'daily',
      breakoutDate: new Date('2024-03-29').toLocaleDateString(),
      lastUpdate: new Date().toLocaleDateString(),
      origin: 'Technical analysis',
      figure: 'Triangle pattern',
      breakoutPivot: 250,
      closeToBreakoutPivot: 245,
      breakdownPivot: 240,
      closeToBreakdownPivot: 242,
      closeToBreakout: true,
      Volume: "1.7B",
      MarketCap: "1.8B",
      Change : "1.5%",
      PriceChange: "1.78",
      Close: 245.32,
    },
    {
      ticker: 'AMZN',
      brokeOut: true,
      breakingOut: false,
      breakingDown: false,
      timeframe: 'weekly',
      breakoutDate: new Date('2024-03-29').toLocaleDateString(),
      lastUpdate: new Date().toLocaleDateString(),
      origin: 'Fundamental analysis',
      figure: 'Head and shoulders',
      breakoutPivot: 3500,
      closeToBreakoutPivot: 3550,
      breakdownPivot: 3400,
      closeToBreakdownPivot: 3450,
      closeToBreakout: false,
      Volume: "2.5B",
      MarketCap: "2.3B",
      Change : "3.2%",
      PriceChange: "3.45",
      Close: 3520.45,
    },
    {
      ticker: 'AAPL',
      brokeOut: true,
      breakingOut: false,
      breakingDown: false,
      timeframe: 'daily',
      breakoutDate: new Date('2024-03-28').toLocaleDateString(),
      lastUpdate: new Date().toLocaleDateString(),
      origin: 'Technical analysis',
      figure: 'Double bottom',
      breakoutPivot: 120,
      closeToBreakoutPivot: 110,
      breakdownPivot: 100,
      closeToBreakdownPivot: 105,
      closeToBreakout: false,
      Volume: "2.5B",
      MarketCap: "2.3B",
      Change : "3.2%",
      PriceChange: "3.45",
      Close: 3520.45,
  },
  {
    ticker: 'GOOG',
    brokeOut: false,
    breakingOut: true,
    breakingDown: false,
    timeframe: 'weekly',
    breakoutDate: new Date('2024-03-28').toLocaleDateString(),
    lastUpdate: new Date().toLocaleDateString(),
    origin: 'Fundamental analysis',
    figure: 'Ascending triangle',
    breakoutPivot: 2000,
    closeToBreakoutPivot: 1950,
    breakdownPivot: 1900,
    closeToBreakdownPivot: 1975,
    closeToBreakout: true,
    Volume: "1.5B",
    MarketCap: "1.5B",
    Change : "2%",
    PriceChange: "2.45",
    Close: 2512.45,
  },
  {
    ticker: 'TSLA',
    brokeOut: false,
    breakingOut: true,
    breakingDown: false,
    timeframe: 'weekly',
    breakoutDate: new Date('2024-03-28').toLocaleDateString(),
    lastUpdate: new Date().toLocaleDateString(),
    origin: 'Fundamental analysis',
    figure: 'Ascending triangle',
    breakoutPivot: 2000,
    closeToBreakoutPivot: 1950,
    breakdownPivot: 1900,
    closeToBreakdownPivot: 1975,
    closeToBreakout: true,
    Volume: "1.5B",
    MarketCap: "1.5B",
    Change : "2%",
    PriceChange: "2.45",
    Close: 2512.45,
  },
  {
    ticker: 'MSFT',
    brokeOut: false,
    breakingOut: true,
    breakingDown: false,
    timeframe: 'daily',
    breakoutDate: new Date('2024-03-29').toLocaleDateString(),
    lastUpdate: new Date().toLocaleDateString(),
    origin: 'Technical analysis',
    figure: 'Triangle pattern',
    breakoutPivot: 250,
    closeToBreakoutPivot: 245,
    breakdownPivot: 240,
    closeToBreakdownPivot: 242,
    closeToBreakout: true,
    Volume: "1.7B",
    MarketCap: "1.8B",
    Change : "1.5%",
    PriceChange: "1.78",
    Close: 245.32,
  },
  {
    ticker: 'AMZN',
    brokeOut: true,
    breakingOut: false,
    breakingDown: false,
    timeframe: 'weekly',
    breakoutDate: new Date('2024-03-29').toLocaleDateString(),
    lastUpdate: new Date().toLocaleDateString(),
    origin: 'Fundamental analysis',
    figure: 'Head and shoulders',
    breakoutPivot: 3500,
    closeToBreakoutPivot: 3550,
    breakdownPivot: 3400,
    closeToBreakdownPivot: 3450,
    closeToBreakout: false,
    Volume: "2.5B",
    MarketCap: "2.3B",
    Change : "3.2%",
    PriceChange: "3.45",
    Close: 3520.45,
  },
  {
    ticker: 'AAPL',
    brokeOut: true,
    breakingOut: false,
    breakingDown: false,
    timeframe: 'daily',
    breakoutDate: new Date('2024-03-28').toLocaleDateString(),
    lastUpdate: new Date().toLocaleDateString(),
    origin: 'Technical analysis',
    figure: 'Double bottom',
    breakoutPivot: 120,
    closeToBreakoutPivot: 110,
    breakdownPivot: 100,
    closeToBreakdownPivot: 105,
    closeToBreakout: false,
    Volume: "2.5B",
    MarketCap: "2.3B",
    Change : "3.2%",
    PriceChange: "3.45",
    Close: 3520.45,
},
{
  ticker: 'GOOG',
  brokeOut: false,
  breakingOut: true,
  breakingDown: false,
  timeframe: 'weekly',
  breakoutDate: new Date('2024-03-28').toLocaleDateString(),
  lastUpdate: new Date().toLocaleDateString(),
  origin: 'Fundamental analysis',
  figure: 'Ascending triangle',
  breakoutPivot: 2000,
  closeToBreakoutPivot: 1950,
  breakdownPivot: 1900,
  closeToBreakdownPivot: 1975,
  closeToBreakout: true,
  Volume: "1.5B",
  MarketCap: "1.5B",
  Change : "2%",
  PriceChange: "2.45",
  Close: 2512.45,
},
{
  ticker: 'TSLA',
  brokeOut: false,
  breakingOut: true,
  breakingDown: false,
  timeframe: 'weekly',
  breakoutDate: new Date('2024-03-28').toLocaleDateString(),
  lastUpdate: new Date().toLocaleDateString(),
  origin: 'Fundamental analysis',
  figure: 'Ascending triangle',
  breakoutPivot: 2000,
  closeToBreakoutPivot: 1950,
  breakdownPivot: 1900,
  closeToBreakdownPivot: 1975,
  closeToBreakout: true,
  Volume: "1.5B",
  MarketCap: "1.5B",
  Change : "2%",
  PriceChange: "2.45",
  Close: 2512.45,
},
{
  ticker: 'MSFT',
  brokeOut: false,
  breakingOut: true,
  breakingDown: false,
  timeframe: 'daily',
  breakoutDate: new Date('2024-03-29').toLocaleDateString(),
  lastUpdate: new Date().toLocaleDateString(),
  origin: 'Technical analysis',
  figure: 'Triangle pattern',
  breakoutPivot: 250,
  closeToBreakoutPivot: 245,
  breakdownPivot: 240,
  closeToBreakdownPivot: 242,
  closeToBreakout: true,
  Volume: "1.7B",
  MarketCap: "1.8B",
  Change : "1.5%",
  PriceChange: "1.78",
  Close: 245.32,
},
{
  ticker: 'AMZN',
  brokeOut: true,
  breakingOut: false,
  breakingDown: false,
  timeframe: 'weekly',
  breakoutDate: new Date('2024-03-29').toLocaleDateString(),
  lastUpdate: new Date().toLocaleDateString(),
  origin: 'Fundamental analysis',
  figure: 'Head and shoulders',
  breakoutPivot: 3500,
  closeToBreakoutPivot: 3550,
  breakdownPivot: 3400,
  closeToBreakdownPivot: 3450,
  closeToBreakout: false,
  Volume: "2.5B",
  MarketCap: "2.3B",
  Change : "3.2%",
  PriceChange: "3.45",
  Close: 3520.45,
},
{
  ticker: 'AAPL',
  brokeOut: true,
  breakingOut: false,
  breakingDown: false,
  timeframe: 'daily',
  breakoutDate: new Date('2024-03-28').toLocaleDateString(),
  lastUpdate: new Date().toLocaleDateString(),
  origin: 'Technical analysis',
  figure: 'Double bottom',
  breakoutPivot: 120,
  closeToBreakoutPivot: 110,
  breakdownPivot: 100,
  closeToBreakdownPivot: 105,
  closeToBreakout: false,
  Volume: "2.5B",
  MarketCap: "2.3B",
  Change : "3.2%",
  PriceChange: "3.45",
  Close: 3520.45,
},
{
ticker: 'GOOG',
brokeOut: false,
breakingOut: true,
breakingDown: false,
timeframe: 'weekly',
breakoutDate: new Date('2024-03-28').toLocaleDateString(),
lastUpdate: new Date().toLocaleDateString(),
origin: 'Fundamental analysis',
figure: 'Ascending triangle',
breakoutPivot: 2000,
closeToBreakoutPivot: 1950,
breakdownPivot: 1900,
closeToBreakdownPivot: 1975,
closeToBreakout: true,
Volume: "1.5B",
MarketCap: "1.5B",
Change : "2%",
PriceChange: "2.45",
Close: 2512.45,
},
{
ticker: 'TSLA',
brokeOut: false,
breakingOut: true,
breakingDown: false,
timeframe: 'weekly',
breakoutDate: new Date('2024-03-28').toLocaleDateString(),
lastUpdate: new Date().toLocaleDateString(),
origin: 'Fundamental analysis',
figure: 'Ascending triangle',
breakoutPivot: 2000,
closeToBreakoutPivot: 1950,
breakdownPivot: 1900,
closeToBreakdownPivot: 1975,
closeToBreakout: true,
Volume: "1.5B",
MarketCap: "1.5B",
Change : "2%",
PriceChange: "2.45",
Close: 2512.45,
},
{
  ticker: 'MSFT',
  brokeOut: false,
  breakingOut: true,
  breakingDown: false,
  timeframe: 'daily',
  breakoutDate: new Date('2024-03-29').toLocaleDateString(),
  lastUpdate: new Date().toLocaleDateString(),
  origin: 'Technical analysis',
  figure: 'Triangle pattern',
  breakoutPivot: 250,
  closeToBreakoutPivot: 245,
  breakdownPivot: 240,
  closeToBreakdownPivot: 242,
  closeToBreakout: true,
  Volume: "1.7B",
  MarketCap: "1.8B",
  Change : "1.5%",
  PriceChange: "1.78",
  Close: 245.32,
},
{
  ticker: 'AMZN',
  brokeOut: true,
  breakingOut: false,
  breakingDown: false,
  timeframe: 'weekly',
  breakoutDate: new Date('2024-03-29').toLocaleDateString(),
  lastUpdate: new Date().toLocaleDateString(),
  origin: 'Fundamental analysis',
  figure: 'Head and shoulders',
  breakoutPivot: 3500,
  closeToBreakoutPivot: 3550,
  breakdownPivot: 3400,
  closeToBreakdownPivot: 3450,
  closeToBreakout: false,
  Volume: "2.5B",
  MarketCap: "2.3B",
  Change : "3.2%",
  PriceChange: "3.45",
  Close: 3520.45,
},
{
  ticker: 'AAPL',
  brokeOut: true,
  breakingOut: false,
  breakingDown: false,
  timeframe: 'daily',
  breakoutDate: new Date('2024-03-28').toLocaleDateString(),
  lastUpdate: new Date().toLocaleDateString(),
  origin: 'Technical analysis',
  figure: 'Double bottom',
  breakoutPivot: 120,
  closeToBreakoutPivot: 110,
  breakdownPivot: 100,
  closeToBreakdownPivot: 105,
  closeToBreakout: false,
  Volume: "2.5B",
  MarketCap: "2.3B",
  Change : "3.2%",
  PriceChange: "3.45",
  Close: 3520.45,
},
{
ticker: 'GOOG',
brokeOut: false,
breakingOut: true,
breakingDown: false,
timeframe: 'weekly',
breakoutDate: new Date('2024-03-28').toLocaleDateString(),
lastUpdate: new Date().toLocaleDateString(),
origin: 'Fundamental analysis',
figure: 'Ascending triangle',
breakoutPivot: 2000,
closeToBreakoutPivot: 1950,
breakdownPivot: 1900,
closeToBreakdownPivot: 1975,
closeToBreakout: true,
Volume: "1.5B",
MarketCap: "1.5B",
Change : "2%",
PriceChange: "2.45",
Close: 2512.45,
},
{
ticker: 'TSLA',
brokeOut: false,
breakingOut: true,
breakingDown: false,
timeframe: 'weekly',
breakoutDate: new Date('2024-03-28').toLocaleDateString(),
lastUpdate: new Date().toLocaleDateString(),
origin: 'Fundamental analysis',
figure: 'Ascending triangle',
breakoutPivot: 2000,
closeToBreakoutPivot: 1950,
breakdownPivot: 1900,
closeToBreakdownPivot: 1975,
closeToBreakout: true,
Volume: "1.5B",
MarketCap: "1.5B",
Change : "2%",
PriceChange: "2.45",
Close: 2512.45,
},

  

  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pattern, setPattern] = useState("all");
  const [filteredData, setFilteredData] = useState(BreakoutReportsData);


  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toLocaleDateString();
    const filteredData = BreakoutReportsData.filter(
      (item) => item.breakoutDate === formattedDate
    );
    setFilteredData(filteredData);
  };
  

  return (
    <Card>
      <div className="h-auto">
        <div className="mb-2 z-50">
          <label htmlFor="dateFilter" className="mr-2 text-xs">
            Date:
          </label>
          <DatePicker
            id="dateFilter"
            selected={selectedDate}
            onChange={handleDateChange}
            className={`text-xs px-2 py-1 border rounded-md ${
              darkMode ? "text-white bg-gray-900" : "text-gray-800 bg-white"
            }`}
            calendarClassName={darkMode ? "dark-mode-calendar" : ""} // Conditionally apply dark mode class
            maxDate={new Date()} 
          />

              {/*customization for datepicker*/}
          <style jsx>{`
            /* Your existing CSS */
            
            .react-datepicker {
              font-size: 0.7em;
            }
            
            .react-datepicker__header {
              padding-top: 0.56em;
            }
            
            .react-datepicker__month {
              margin: 0.28em 0.7em;
            }
            
            .react-datepicker__day-names {
              margin-top: 0.5em;
            }
            
            .react-datepicker__day-name,
            .react-datepicker__day {
              width: 1.33em;
              line-height: 1.33em;
              margin: 0.116em;
            }
            
            .react-datepicker__current-month {
              font-size: 0.7em;
            }
            
            .react-datepicker__navigation {
              margin-top: -8px;
              line-height: 1.7em;
              border: 0.45em solid transparent;
            }
            
            .react-datepicker__navigation--previous {}
            
            .react-datepicker__navigation--next {}
            
            /* Dark mode calendar styles */
            .dark-mode-calendar {
              background-color: rgb(43, 55, 79); /* Adjust background color for dark mode */
             
              .react-datepicker__day{
                color:white;
              }

              .react-datepicker__day:hover {
                width: 1.33em;
                line-height: 1.33em;
                margin: 0.116em;
                background-color: black; /* Adjust background color for dark mode */
                color: white; /* Adjust text color for dark mode */
              }
            }
          `}</style>

        </div>
        <div className="flex justify-between">
          <span className={`text-md ${darkMode ? "text-white" : "text-gray-800"} p-0 m-0 font-bold`}>
            <Select />
          </span>
          <div className="mb-2">
            <label htmlFor="patternFilter" className="mr-2 text-xs">
              Pattern
            </label>
            <select
              id="patternFilter"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className={`text-xs px-2 py-1 border rounded-md ${darkMode ? "text-white bg-gray-900" : "text-gray-800 bg-white"}`}
              style={{ boxShadow: "none" }}
            >
              <option value="all">all</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto" style={{ height: '400px', overflowY: 'scroll', scrollbarWidth: 'thin', scrollbarColor: `${darkMode ? 'rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5) rgba(255, 255, 255, 0.2)'}` }}>
          <table className={`w-full ${darkMode ? "text-white" : "text-gray-800"} text-left border-collapse`} style={{ fontSize: "0.9rem" }}>
            <thead>
              <tr>
                {breakoutDetails.map((item, index) => (
                  <th key={index} className="text-xs sm:py-0.9 px-0.9 sm:px-1.8 pr-1" style={{ fontSize: "0.7rem" }}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {filteredData.map((details, rowIndex) => (
              <tr key={rowIndex}>
                  {breakoutDetails.map((item, cellIndex) => (
                      <td
                          key={cellIndex}
                          className={`text-xs sm:py-0.9 px-0.9 sm:px-1.8 p-1 text-center ${cellBorderDarkMode}`}
                          style={{ fontSize: "0.7rem" }}
                      >
                          {details[item.key]}
                      </td>
                  ))}
              </tr>
          ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default Details;
