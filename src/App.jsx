import { createContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Header";
import Navbar from "./components/Card";

export const ThemeContext = createContext("light");
function App() {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
