import axios from 'axios';
import React from 'react';
import './style.scss';
import './styleButton.css';
import './styleButton2.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Avatar } from 'antd';


export default function TableComp() {
  let navigate = useNavigate();
   const [cart, setCart] = useState([]);


   useEffect(() => {
     const token = localStorage.getItem('token');
     if (token) {
       axios
         .get('http://52.77.238.229:3000/api/users/mycart', {
           headers: {
             Authorization: `Bearer ${token}`,// JWT in Authorization header
           },
         })
         .then((res) => {
           setCart(res.data);
         })
         .catch((err) => {
           if (err.response.status === 401) {
             // token expired - remove and redirect to login
             localStorage.removeItem('token');
            //  navigate('/login');
           }
         });
     } else {
      //  navigate('/login');
       
     }
   }, []);

  //-------------------------------------------------------------------

  function Logout() {
    localStorage.removeItem('token');
        navigate('/login');
};

  //-------------------------------------------------------------------

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
              src={`http://52.77.238.229:3000/upload-files/${record.Photo}`}
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
          await axios.delete(`http://52.77.238.229:3000/api/users/delete/${record.id}`);
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
  axios.get('http://52.77.238.229:3000/api/users').then((result) => {
     setData(result.data);
   });
 }, []);
 return <div> < Table dataSource={data} columns={columns} pagination={false} />;
 <center>

       <a href={`/NewProduct`}>
       <button class="button-71" onClick={()=> console.log()}>
       {"Create New Product"}
     </button></a>
     
     &nbsp;
     
       <button class="button-71" onClick={Logout} padding='20px'>
       {"Log-out"}
     </button>
     


     </center></div>
}




// const Table = (props) => {
//   console.log(props);

//     return (

//         <div><center>
//             <section class="wrapper1">
//                 <main class="row1 title1">
//                     <ul>
//                         <li>Photo</li>
//                         <li>Product Name</li>
//                         <li>Stock Left</li>
//                         <li>Category</li>
//                         <li>Action</li>
//                     </ul>
//                 </main>

//                 {props.dataSource.map(data => (
//                     <section class="row-fadeIn-wrapper">
//                         <article class="row1 fadeIn nfl">
//                             <ul>
//                                     <li><img src={data.Photo} width='90PX' height={50} /></li>
//                                     <li>{data.ProductName}</li>
//                                     <li>{data.StockLeft}</li>
//                                     <li>{data.Category}</li>
//                                     <li>
//                                         <a href='/EditProduct'>
//                                             <button class="button-71" role="button">Edit</button>&nbsp;
//                                             </a>
//                                         <button class="button-71" role="button">Delete</button>
//                                     </li>
                                   
//                             </ul>
//                         </article>
//                         </section> 
//                 ))}
                
//                 <button class="button-71" role="button" onClick={() => {window.location.href = '/NewProduct'}} >Create</button>
                
//             </section></center>
            
//         </div>
//     )
// }

//----------------------------------------------------------------------------------------------------------------------------
// const data = [
//     {
//       key: 1,
//       Photo: "https://3.bp.blogspot.com/-equ4LFnvf2w/WrdihbpYCmI/AAAAAAAACGk/FeFXZS7FUhUWG5MvdJ-pi0YvqWsVUqpzgCLcBGAs/w1200-h630-p-k-no-nu/2020%2BMustang%2BCobra.jpg" ,
//       ProductName: 'Mustang',
//       StockLeft: 3,
//       Category: 'Ford',
//       Action: '',
//     },
//     {
//       key: 2,
//       Photo: "https://preview.redd.it/cryd7mi9tbcz.jpg?width=960&crop=smart&auto=webp&s=f64ecb2b6350d8995e22fe4d15f3c9f9334286c8" ,
//       ProductName: 'GTR R35',
//       StockLeft: 5,
//       Category: 'Nissan',
//       Action: '',
//     },
//     {
//       key: 3,
//       Photo: "http://insidelineauto.com/wp-content/uploads/2018/03/toronto-auto-show-cias-2018-subaru-brz-rocket-bunny-pandem-widebody.jpg" ,
//       ProductName: 'Impreza',
//       StockLeft: 2,
//       Category: 'Subaru',
//       Action: '',
//     },
//     {
//       key: 4,
//       Photo: "https://monsterservice.pro/wp-content/uploads/2020/11/010-2.jpg" ,
//       ProductName: 'Audy TT',
//       StockLeft: 6,
//       Category: 'Audy',
//       Action: '',
//     },
//     {
//       key: 5,
//       Photo: "https://bangshift.com/wp-content/uploads/2017/12/2016-Chevy-Camaro-SS-Chevy-Award-Winning-SEMA-Car-Widebody-Boosted-2.jpg" ,
//       ProductName: 'Camaro',
//       StockLeft: 4,
//       Category: 'Chevrolet',
//       Action: '',
//     }
//   ]
  //-----------------------------------------------------------------------------------------------------------
// function TableComp() {
  
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/users').then((result) => {
//       setData(result.data);
//       console.log('data :',data)
//     });
//   }, []);
  


//     return (
//       <>
//       <Table dataSource={data}/>
//       </>
//     );
//   };
// export default TableComp