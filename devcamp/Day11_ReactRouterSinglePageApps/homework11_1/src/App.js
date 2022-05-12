import './App.css';
import { Routes, Route, Outlet, Link } from
"react-router-dom";
import Home from './Component/Home'
import Portfolio from './Component/Portfolio';
import AboutUs from './Component/Aboutus';
import Contact from './Component/contact';
import NoMatch from './Component/NoMatch';


function App() {
  return (
  <div>
     <h1>Portfolio</h1>
     <div><p>
       <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="Portfolio" element={<Portfolio/>} />
         <Route path="About_us" element={<AboutUs/>} />
         <Route path="contact" element={<Contact/>} />
         <Route path="*" element={<NoMatch />} />
         </Route>
       </Routes>
       </p></div>
     <hr />
  </div>
  );
 }


function Layout() {
  return (
  <div>
    <nav>
        <ul><div style={{}}
        ><p style={{textAlign:"right",backgroundColor:"pink",padding:"20px"}}>
          <Link to="/">Home | </Link>
          <Link to="/Portfolio">Portfolio | </Link>
          <Link to="/About_us">About us | </Link>
          <Link to="/Contact">Contact | </Link>
          <Link to="/nothing-here"></Link>
          </p></div>
          </ul>
    </nav>
    <hr />
    <Outlet />
  </div>
  );
 }
 





export default App;
