import './App.css';
import { Routes, Route, Outlet, Link } from
"react-router-dom";


function App() {
  return (
  <div>
     <h1>Example</h1>
     <div><p>
       <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="contact" element={<Contact />} />
         <Route path="dashboard" element={<Dashboard/>} />
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
        <ul><div><p style={{textAlign:"right"}}>
          <Link to="/">Home | </Link>
          <Link to="/about">About | </Link>
          <Link to="/Contact">Contact | </Link>
          <Link to="/dashboard">Dashboard | </Link>
          <Link to="/nothing-here">Nothing Here</Link>
          </p></div>
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


 function About() {
  return (<h2>About</h2>);
 }


 function Contact() {
  return (<div><h2 style={{color:"Red" ,textAlign: "center"}}>Contact</h2><p>Faster, Less Bandwidth : เพราะไม่ต้องดึงข้อมูลหน้าเว็ปทั้งหน้าจาก Back-end Server ใช้การดึง API และตัว Client ทำการ Re-render การแสดงผลเอง
  Good Experience : เพราะความเร็วในการทำงานและหน้าจอไม่มีการ Refresh เมื่อเปลี่ยน Page
  </p></div>
  );
 }


 function Dashboard() {
  return (<h2>Dashboard</h2>);
 }


 function NoMatch() {
  return (
  <><h2>Nothing to see here!</h2><p><Link to="/">Go
  to the home page</Link></p></>
  );
 }
 



export default App;