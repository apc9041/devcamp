import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stock from "./components/Stock";
import Warehouse from "./components/Warehouse";
import { useContext } from "react";
import AuthContext from "./components/auth-context";
import Dashboard from "./components/Dashboard";

const token = localStorage.getItem("mytoken");

function App() {
  const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <Routes>
        <Route index element={
            <div>
              <Navbar />
              <Dashboard />
            </div>
          }
        />
        <Route
          path="/stock" element={
            <div>
              <Navbar />
              <Stock />
            </div>
          }
        />
        <Route
          path="/warehouse" element={
            <div>
              <Navbar />
              <Warehouse />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;