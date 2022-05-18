import { Table } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import React from 'react';



export default function App() {

  useEffect( ()=>{   

    const get = async () => {

      const response = await axios.get('/api/users')
      const aUser = await response.data.data;
      console.log(response.data.data);
      
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
      console.log(str)
      document.getElementById('content').innerHTML = str;
  }

  get()

},[])

//  const [data, setData] = useState([]);
//  useEffect(() => {

//   
//   axios.get("/api/users").then(function (response) {
//     let rowDisplay = document.getElementById('rowDisplay');
//     let textHtml = '';
//     console.log(response.data.data);
//     console.log(response.data.data[1].avatar);
//     for (let i=0; i < response.data.data.length; i++) {
//       let  images = "images/"
//         let img = "<p><img src='" + response.data.data[i].avatar + "'></p>";
  
//         textHtml += "<td><p><span>" + response.data.data[i].first_name +"</span></p>"+"<p>" + response.data.data[i].email + img + "</p></td>";

//     }
//     rowDisplay.innerHTML = textHtml;
//   });

//  }, []);


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



