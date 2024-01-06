import { Outlet } from "react-router-dom";
import Navbar from "./components/Sear";

import "./App.css";
import Nave from "./components/Nave";

function App() {
  return (
    <div className="app-container">
      
      <Nave />
      <Outlet />
    </div>
  );
}

export default App;



