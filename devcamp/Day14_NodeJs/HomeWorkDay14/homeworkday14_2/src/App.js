import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';



export default function App() {
 const columns = [
   {
     title: 'State',
     dataIndex: 'State',
     key: 'State',
   },
   {
     title: 'Year',
     dataIndex: 'Year',
     key: 'Year',
   },
   {
     title: 'Population',
     dataIndex: 'Population',
     key: 'Population',
   },
 ];


 const [data, setData] = useState([]);
 useEffect(() => {


  axios.get("/api/users").then(function (response) {
    let rowDisplay = document.getElementById('rowDisplay');
    let textHtml = '';
    console.log(response.data.data);
    console.log(response.data.data[1].avatar);
    for (let i=0; i < response.data.data.length; i++) {
      let  images = "images/"
        let img = "<p><img src='" + response.data.data[i].avatar + "'></p>";
  
        textHtml += "<td><p><span>" + response.data.data[i].first_name +"</span></p>"+"<p>" + response.data.data[i].email + img + "</p></td>";

    }
    rowDisplay.innerHTML = textHtml;
  });

 }, []);
 return (
  <div style={{textAlign: 'center'}}>
    <h1>Hello ReqRes users!</h1>
    <table style={{textAlign: 'center'}}>
    <tr id="rowDisplay"></tr></table>
  </div>

 )
}



