import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { useNavigate } from 'react-router-dom';

function SubEdit() {

const [data, setData] = useState([]);
useEffect(() => {
  axios.get('http://localhost:3000/users').then((result) => {
    console.log(result.data);
    console.log(result.data[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)].ProductName);
    setData(result.data);
  });
}, []);
}
export default SubEdit;
export const {data} =  data[0]