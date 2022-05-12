import './App.css';
import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation
} from "react-router-dom";


function App() {
  return (
  <div>
     <h1>Example</h1>
       <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="noodle" element={<Noodle />} />
         <Route path="noodle/detail" element={<NoodleDetail />} />
         <Route path="product" element={<Product />} />
         <Route path="product/:id" element={<ProductDetail />} />
         <Route path="*" element={<NoMatch />} />
         <Route path="customer" element={<Customer />} />
         <Route path="TabelTag" element={<Tabel />} />
         </Route>
       </Routes>
     <hr />
  </div>
  );
 }


function Layout() {
  return (<>
  <div>
    
    <nav>
        <ul>
          <div style={{backgroundColor:"blue", textColor:"white", padding:"20px"}}>
            <Link to="/">Home | </Link>
            <Link to="/about">About | </Link>
            <Link to="/dashboard">Dashboard | </Link>
            <Link to="/noodle">Noodle | </Link>
            <Link to="/customer">Customer | </Link>
            <Link to="/TabelTag">Tabel Tag | </Link>
            <Link to="/nothing-here">Nothing Here | </Link>
            <Link to="/about">About | </Link>
            <Link to="/product">Product | </Link>
            <Link to="/dashboard">Dashboard | </Link>
          </div>
        </ul>
    </nav>
    <hr />
  </div>

  <div 
  // style={{textAlign: 'center'}}
  >
    <Outlet />
  </div>

  </>
  );
 }



 function Tabel() {
   return (<div>
     <table>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
    </table>
   </div>)
 }
 

 function Customer() {
   return (
   <div>
      <h2 style={{color: 'red'}}>Customer</h2>
      <p>What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   </div>
   
   );
 }
 

function Home() {
  return (<h2>Home</h2>);
 }


 function About() {
  return (<h2>About</h2>);
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

 function Product() {
  const productList = [
  { id: '01', name: 'iPhone 11' },
  { id: '02', name: 'iPhone 12' },
  { id: '03', name: 'iPhone 13' }
  ]
  return (<><h2>Product</h2><ul>
  {productList.map(x => <li>
    <Link to={`${x.id}`}>
      {x.name}
      </Link></li>)}
  </ul></>
  );
 }
 function ProductDetail() {
  let param = useParams();
  console.log(param);
  return (<><h2>Product Detail</h2><p>You open
 product {param.id}</p></>);
 }

 function Noodle() {
  let navigate = useNavigate();

  function handleChange(e) {
   
    e.preventDefault()
    
    let form = e.currentTarget;
    let formData = new FormData(form);
    let data = { topping: formData.getAll('toppings'), noodle: formData.get('noodle') }
    navigate('/noodle/detail', { replace: true, state: { data } })
  }
  return (<><form onSubmit={handleChange}>
    <p>What would you like?</p>
    <p>
      <label>
        <input type="radio" name="noodle" value="small" />
        เส้นเล็ก
      </label>
      <br />
      <label>

      <input type="radio" name="noodle" value="big" />
        เส้นใหญ่
      </label>
      <br />
    </p>

    <p>
      <label>
        <input type="checkbox" name="toppings" value="meatBall" />
        ลูกชิ้น
      </label>
      <br />
      <label>
        <input type="checkbox" name="toppings" value="meat" />
        เนื้อ
      </label>
      <br />
      <label>
        <input
          type="checkbox" name="toppings" value="vegetable" />
        ผัก
      </label>
    </p>
    <input type='submit' />
  </form>
  </>
  
  );
}

function NoodleDetail() {
  const location = useLocation();
  console.log(location.state.data.noodle);
  console.log(location.state.data.topping);

  let order = location.state.data
  return (<><h2>Noodel Detail</h2>
    <h3>คุณสั่งเส้น : {order.noodle}</h3>
    <h3>คุณสั่ง Topping : {order.topping.map(x=> <span>{x} - </span>)}</h3>
  </>);
}

 



export default App;