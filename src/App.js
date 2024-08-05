import { useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import { ChartProvider } from "./context/ChartContext"; // Import ChartProvider
import Dashboard from "./components/Dashboard";
import { Acc } from "./components/Acc";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ChartProvider> 
        <Acc/>
        
      </ChartProvider>
    </ThemeContext.Provider>
  );
}

export default App;
