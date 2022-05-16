// import '../App.css';
import { Routes, Route, Outlet, Link } from
    "react-router-dom";
    import Button from 'antd';
    import 'antd/dist/antd.css'

function EmployeetList() {
    const EmployeetList = [
        { id: '01', firstname: 'Robert', lastname:'Simionescu', age:'38', gender:'Male', phoneNumber:'852-462-7402',position:'Manager', Department:'Marketing',Salary:'40,000' },
        { id: '02', firstname: 'Dalia', lastname:'Lippitt', age:'42', gender:'Female', phoneNumber:'774-527-2642',position:'Manager', Department:'Human Resources',Salary:'40,000' },
        { id: '03', firstname: 'Jenifer', lastname:'Heinrici', age:'25', gender:'Female', phoneNumber:'508-291-9585',position:'Admin', Department:'Marketing',Salary:'20,000' },
        { id: '04', firstname: 'Fathom', lastname:'Etoile', age:'35', gender:'Male', phoneNumber:'590-715-8737',position:'Admin', Department:'Human Resources',Salary: '20,000'},
        { id: '05', firstname: 'Dadaria', lastname:'Mourge', age:'38', gender:'Female', phoneNumber:'472-872-5135',position:'Manager', Department:'Engineering',Salary:'40,000' },
        { id: '06', firstname: 'Conrand', lastname:'Hubbucks', age:'22', gender:'Male', phoneNumber:'485-446-7053',position:'Services', Department:'Engineering',Salary:'30,000' },
        { id: '07', firstname: 'Scottie', lastname:'Daley', age:'32', gender:'Male', phoneNumber:'384-375-1775',position:'Support', Department:'Engineering',Salary:'30,000' },
    ]
    return (<><div><h2 style={{ color: "Red", textAlign: "center" }}>Employee List</h2>
        <ul></ul>
        {EmployeetList.map(x => <ul> <li>
            {x.firstname} : {x.Department}  &nbsp; &nbsp;
            <Link to={`${x.id}/${x.firstname}/${x.lastname}/${x.age}/${x.gender}/${x.phoneNumber}/${x.position}/${x.Department}/${x.Salary}`}>
            <button type="button">Employee Detail</button> 
            </Link></li></ul>)}

    </div>
    </>
    );
}


//    function Product() {
//     return (<><h2>Product</h2><ul>
//     </ul></>
//     );
//    }
// ID
// Firstname
// Lastname
// Age
// Gender
// phoneNumber
// Position
// Department
// Salary




export default EmployeetList;