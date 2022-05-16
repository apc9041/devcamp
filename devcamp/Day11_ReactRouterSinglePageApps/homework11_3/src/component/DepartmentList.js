// import '../App.css';
import { Routes, Route, Outlet, Link } from
"react-router-dom";
import EmployeetList from './EmployeeList'

 function DepartmentList() {
//     return (<div><h2 style={{color:"Red" ,textAlign: "center"}}>Department List</h2>
    
    
    
//     <p>content
//     </p></div>
//     );
//    }

   const DepartmentListid = [
    { id: '01',Department:'Marketing'},
    { id: '02',Department:'Human Resources'},
    { id: '03',Department:'Engineering',}
]
return (<><div><h2 style={{ color: "Red", textAlign: "center" }}>Department Detail</h2>
    <ul></ul>
    {DepartmentListid.map(x => <ul> <li>
        {x.Department} :&nbsp; &nbsp;

        <Link to={`EmployeetList/${x.id}/${x.Department}`}>
        <button type="button">Department Detail</button> 
        </Link></li></ul>)}

</div>
</>
);
}





   export default DepartmentList;
