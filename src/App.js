import { Typography } from "@mui/material";
import "./App.css";
import AverageShareCalc from "./components/AverageShareCalc";

function App() {
  return (
    <div className="App">
      <Typography component={"h1"}>Average Share Calculator</Typography>
      <AverageShareCalc />
    </div>
  );
}

export default App;
