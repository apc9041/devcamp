import '../App.css';
import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation
} from "react-router-dom";

    function ProductDetail() {
    let param = useParams();
    console.log(param);
    return (<><h2>Product Detail</h2><p>You open
   product {param.id}</p></>);
   }

  export default ProductDetail;