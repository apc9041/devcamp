import { Table } from 'antd';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import React from 'react';



export default function App() {

  useEffect( ()=>{   

    const get = async () => {

      const response = await axios.get('/api/users')
      const aUser = await response.data.data;
      
      let str = '';
      
      for (let i = 0; i < aUser.length; i++) {
          str += `
              <td class="col-api">
                  <span class='bold'>${aUser[i].first_name}</span><br>
                  ${aUser[i].email}<br>
                  <img src='${aUser[i].avatar}'>
              </td>
              `;
          
      }
      document.getElementById('content').innerHTML = str;
      console.log(str)
  }

   get()

},[])

 return (
  <div style={{textAlign: 'center'}}>
    <h1>Hello ReqRes users!</h1>
    <table style={{textAlign: 'center'}}>
      <tbody>
      <tr id="content"></tr>
      </tbody>
    </table>
  </div>

 )
}



// export default function App() {
//   const columns = [
//     {
//       title: 'first_name',
//       dataIndex: 'first_name',
//       key: 'first_name',
//     },
//     {
//       title: 'email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'avatarA',
//       dataIndex: 'avatar',
//       key: 'avatar',
//     },
//   ];
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get('/api/users').then((result) => {
//       setData(result.data.data);
//     });
//   }, []);
//   return <Table dataSource={data} columns={columns} pagination={false} />;
//  }
 
