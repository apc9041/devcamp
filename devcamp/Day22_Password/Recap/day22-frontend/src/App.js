import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from './components/login';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
 }
 

function NoMatch() {
  return (
    <><h2>Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
  );
}

export default App
