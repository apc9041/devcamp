import '../App.css';
import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation
} from "react-router-dom";

function ShopStock() {
    const productList = [
    { id: '01', name: 'iPhone 11' },
    { id: '02', name: 'iPhone 12' },
    { id: '03', name: 'iPhone 13' }
    ]


    return (<><h2>Product</h2><ul>
    {productList.map(x => <li key={x.id}>
      <Link to={`${x.id} ${x.name}`}>
        {x.name}
        </Link></li>)}
    </ul></>
    );
   }
  


   export default ShopStock;
   