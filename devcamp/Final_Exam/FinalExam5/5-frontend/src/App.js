import axios from 'axios';
import React from 'react';
import './style.scss';
import './styleButton.css';
import './styleButton2.css';
import { useEffect,useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Table, Avatar } from 'antd';


export default function TableComp() {
  let navigate = useNavigate();

 const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  }, 
  {
     title: 'Photo',
     key: 'Photo',
     dataIndex: 'Photo',
     render:(text, record) => (
      
       <div> {console.log(record.Photo)}
         {/* <img src={`C:/DevCamp/devcamp/devcamp/Day27_E-commerce/ecommerce_backend/ecommerce_backend/public/upload-files/${record.Photo}`}/> */}
         <Avatar
              size={64}
              src={`http://localhost:3000/upload-files/${record.Photo}`}
            />
       </div> )
   },
   {
     title: 'ProductName',
     dataIndex: 'ProductName',
     key: 'ProductName',
   },
   {
     title: 'StockLeft',
     dataIndex: 'StockLeft',
     key: 'StockLeft',
   },
   {
    title: 'Category',
    dataIndex: 'Category',
    key: 'Category',
  },
  {
    title: 'Action',
    key: 'Action',
    dataIndex: 'Action',
    render: (text, record) => (
     <div>
       <a href={`/EditProduct/${record.id}`}>
       <button class="button-71" onClick={()=> console.log(record.id)}>
       {"Edit"}
     </button></a>
     &nbsp;

     <button class="button-71" onClick={
      //  deleteProduct

        async () => {
          alert('Deleted');
          //  navigate(`${window.location.href}`);
          await axios.delete(`http://localhost:3000/users/delete/${record.id}`);
          await navigate('/');
        }
        
      }>
     {"Delete"}
   </button></div>

    ),
  },
 ];


 const [data, setData] = useState([]);
 useEffect(() => {
  axios.get('http://localhost:3000/users').then((result) => {
     setData(result.data);
   });
 }, []);
 return <div> < Table dataSource={data} columns={columns} pagination={false} />;
 <center>

       <a href={`/NewProduct`}>
       <button class="button-71" onClick={()=> console.log()}>
       {"Create New Product"}
     </button></a>
     
     </center></div>
}




// import { Table } from 'antd';
// import axios from 'axios';
// import { useEffect } from 'react';
// import './App.css';
// import React from 'react';



// export default function App() {

//   useEffect( ()=>{   

//     const get = async () => {

//       const response = await axios.get('http://localhost:3000/users')
//       const aUser = await response.data;
      
//       let str = '';
      
//       for (let i = 0; i < aUser.length; i++) {
//           str += `
//                <tr class="col-api">
//                   <td style={{borderColor:'red'}}>${aUser[i].id}</td>
//                   <td style={{borderColor:'red'}}>${aUser[i].course_name}</td>
//                   <td style=borderColor:'red'>${aUser[i].instructor_name}</td>
//               </tr>
//               `;
          
//       }
//       document.getElementById('content').innerHTML = str;
//       console.log(str)
//   }

//    get()

// },[])

//  return (
//   <div style={{textAlign: 'center'}}>
//     <h1>Data</h1>
//     <table style={{textAlign: 'left'}}>
//       <td>id</td>
//       <td>course_name</td>
//       <td>instructor_name</td>
//       <tbody id="content" style={{borderColor:'red'}}>
      
//       </tbody>
//     </table>
//   </div>

//  )
// }



