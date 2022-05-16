// import '../App.css';
import { Routes, Route, Outlet,useParams,useLocation, Link } from
"react-router-dom";

//  function EmployeeDetail() {
//     return (<div><h2 style={{color:"Red" ,textAlign: "center"}}>Department List</h2><p>content
//     </p></div>
//     );
//    }

function EmployeeDetail() {
   const location = useLocation();
   let employeeDetail = location.state;
   const moreDetail = () => {};
   return (
     <div style={{ margin: "50px" }}>
      

   {/* function EmployeeDetail() {
      let param = useParams();
      console.log(param); */}
      <h2>Employee Detail</h2>
      <p>ID : {employeeDetail.id}</p>
      <p>Firstname : {employeeDetail.firstname}</p>
      <p>Lastname : {employeeDetail.lastname}</p>
      <p>Age : {employeeDetail.age}</p>
      <p>Gender : {employeeDetail.lastname}</p>
      <p>Phone Number : {employeeDetail.phoneNumber}</p>
      <p>Position : {employeeDetail.position}</p>
      <p>Department : {employeeDetail.Department}</p>
      <p>Salary : {employeeDetail.Salary}</p>
      </div>);
  }

  export default EmployeeDetail;

// ID
// Firstname
// Lastname
// Age
// Gender
// phoneNumber
// Position
// Department
// Salary