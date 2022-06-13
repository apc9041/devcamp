import './App.css';
import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation
} from "react-router-dom";
import Home from './component/Home';
import DepartmentList from './component/DepartmentList'
import EmployeeList from './component/EmployeeList'
import 'antd/dist/antd.css'
import EmployeeDetail from "./component/EmployeeDetail";
import employeeList from './component/data';
import Employee from './component/Employee';
import Department from './component/Department';
// import MenuTest from './component/MenuTest';


function App() {
  return <Routing/>;}
  
  
  function Routing() {
  return  (
       <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="employee" element={<Employee />} />
         <Route path="employee-detail" element={<EmployeeDetail />} />

         <Route path="department" element={<Department/>} />
         <Route path="employee/:department" element={<Employee />} />

         
         <Route path="*" element={<NotMatch />} />


         {/* <Route path="EmployeeList" element={<EmployeeList/>} />
         <Route path="EmployeeList/:id/:firstname/:lastname/:age/:gender/:phoneNumber/:position/:Department/:Salary" element={<EmployeeDetail/>} />
         <Route path="EmployeeList/:id/:Department" element={<EmployeeDetail/>} /> */}


         {/* <Route path="Contact" element={<Contact />} />
         <Route path="ShopStock/:id" element={<ProductDetail />} />
         <Route path="WarehouseLocation/:id/:name/:latitude/:longitude/:telno/:faxno" element={<WarehouseDetail/>} /> */}
         </Route>
       </Routes>
  );
 }


function Layout() {
    return (
        <ContainerComp>
          <HeaderComp></HeaderComp>
          <MenuComp></MenuComp>
          <ContentComp></ContentComp>
          <FooterComp></FooterComp>
        </ContainerComp>
      );
    }
    
    function ContainerComp(props) {
        return props.children;
      }
      
      function HeaderComp() {
        return (
          <>
            <h1>Header</h1>
            <hr />
          </>
        );
      }
      


function MenuComp() {
return (<>
  <div><h1>Menu</h1>
    <nav>
        <ul>
          <div style={{backgroundColor:"Pink", Color:"white", padding:"20px"}}>
            <Link to="/">Home | </Link>
            <Link to="/employee">EmployeeList | </Link>
            <Link to="/department">DepartmentList | </Link>
            {/* <Link to="/Contact">Contact | </Link>
            <Link to="/nothing-here"></Link> */}
          </div>
        </ul>
    </nav>
    <hr />
  </div>
  </>
  );
 }



 function ContentComp() {
    return (
      <>
        <Outlet />
        <hr />
      </>
    );
  }
  
  function FooterComp() {
    return (
      <>
        <h1>Footer</h1>
        <hr />
      </>
    );
  }
  
  function NotMatch() {
    return <h2>Not Match</h2>;
  }
  
 






//  function About() {
//   return (<h2>About</h2>);
//  }


//  function Dashboard() {
//   return (<h2>Dashboard</h2>);
//  }


//  function NoMatch() {
//   return (
//   <><h2>Nothing to see here!</h2><p><Link to="/">Go
//   to the home page</Link></p></>
//   );
//  }



//  function Product() {
//   const productList = [
//   { id: '01', name: 'iPhone 11' },
//   { id: '02', name: 'iPhone 12' },
//   { id: '03', name: 'iPhone 13' }
//   ]
//   return (<><h2>Product</h2><ul>
//   {productList.map(x => <li>
//     <Link to={`${x.id}`}>
//       {x.name}
//       </Link></li>)}
//   </ul></>
//   );
//  }


//  function ProductDetail() {
//   let param = useParams();
//   console.log(param);
//   return (<><h2>Product Detail</h2><p>You open
//  product {param.id}</p></>);
//  }


 
//  function Noodle() {
//   let navigate = useNavigate();
//   function handleChange(e) {
//     e.preventDefault()
//     let form = e.currentTarget;
//     let formData = new FormData(form);
//     let data = { topping: formData.getAll('toppings'), noodle: formData.get('noodle') }
//     navigate('/noodle/detail', { replace: true, state: { data } })
//   }
//   return (<><form onSubmit={handleChange}>
//     <p>What would you like?</p>
//     <p>
//       <label>
//         <input type="radio" name="noodle" value="small" />
//         เส้นเล็ก
//       </label>
//       <br />
//       <label>

//       <input type="radio" name="noodle" value="big" />
//         เส้นใหญ่
//       </label>
//       <br />
//     </p>

//     <p>
//       <label>
//         <input type="checkbox" name="toppings" value="meatBall" />
//         ลูกชิ้น
//       </label>
//       <br />
//       <label>
//         <input type="checkbox" name="toppings" value="meat" />
//         เนื้อ
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox" name="toppings" value="vegetable" />
//         ผัก
//       </label>
//     </p>
//     <input type='submit' />
//   </form>
//   </>
  
//   );
// }


// function NoodleDetail() {
//   const location = useLocation();
//   console.log(location.state.data.noodle);
//   console.log(location.state.data.topping);

//   let order = location.state.data
//   return (<><h2>Noodel Detail</h2>
//     <h3>คุณสั่งเส้น : {order.noodle}</h3>
//     <h3>คุณสั่ง Topping : {order.topping.map(x=> <span>{x} - </span>)}</h3>
//   </>);
// }

 



export default App;