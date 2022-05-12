import '../App.css';
import {Routes, Route, Outlet, Link, useParams, useNavigate, useLocation
} from "react-router-dom";

function WarehouseDetail() {
    let param = useParams();
    console.log(param);
    return (<><h2>Warehouse Detail</h2>
    <p>Warehouse No. :{param.id}</p>
    <p>Warehouse Name :{param.name}</p>
    <p>Warehouse Latitude :{param.latitude}</p>
    <p>Warehouse Longitude :{param.longitude}</p>
    <p>Warehouse Telephone Number :{param.telno}</p>
    <p>Warehouse Fax Number :{param.faxno}</p>
    </>);
}


// Name :{x.name},
// Latitude: {x.latitude}
// Longitude : {x.longitude}
// Telephone Number : {x.telno}
// Fax Number : {x.faxno}




// function NoodleDetail() {
//     const location = useLocation();
//     console.log(location.state.data.noodle);
//     console.log(location.state.data.topping);
  
//     let order = location.state.data
//     return (<><h2>Noodel Detail</h2>
//       <h3>คุณสั่งเส้น : {order.noodle}</h3>
//       <h3>คุณสั่ง Topping : {order.topping.map(x=> <span key={x}>{x} - </span>)}</h3>
//     </>);
//   }


export default WarehouseDetail;