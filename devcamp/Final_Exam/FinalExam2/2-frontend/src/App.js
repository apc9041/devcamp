import logo from './logo.svg';
import './App.css';
import Register from './component/register';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Login from './component/login';
import Profile from './component/profile';

function App() {
 return (
   <div>
     <Routes>
       <Route path="/" element={<Register />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/register" element={<Register />}></Route>
       <Route path="/profile" element={<Profile />}></Route>
     </Routes>
   </div>
 );
}


function Layout() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/nothing-here">Nothing Here</Link></li> */}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}


function Home() {
  return (<h2>Home</h2>);
}


function NoMatch() {
  return (
    <><h2>Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
  );
}


export default App;
