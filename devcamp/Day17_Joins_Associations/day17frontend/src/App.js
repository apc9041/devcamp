import { Table } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import React from 'react';



export default function App() {

  useEffect( ()=>{   

    const get = async () => {

      const response = await axios.get('http://localhost:3000/users')
      const aUser = await response.data;
      
      let str = '';
      
      for (let i = 0; i < aUser.length; i++) {
          str += `
               <tr class="col-api">
                  <td style={{borderColor:'red'}}>${aUser[i].id}</td>
                  <td style={{borderColor:'red'}}>${aUser[i].course_name}</td>
                  <td style=borderColor:'red'>${aUser[i].instructor_name}</td>
              </tr>
              `;
          
      }
      document.getElementById('content').innerHTML = str;
      console.log(str)
  }

   get()

},[])

 return (
  <div style={{textAlign: 'center'}}>
    <h1>Data</h1>
    <table style={{textAlign: 'left'}}>
      <td>id</td>
      <td>course_name</td>
      <td>instructor_name</td>
      <tbody id="content" style={{borderColor:'red'}}>
      
      </tbody>
    </table>
  </div>

 )
}
