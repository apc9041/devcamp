import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { Button, Form, Input, Space, Layout, InputNumber, Table } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



const Country = () => {
  const [PhotoName, setPhotoName] = useState('');
  const [form] = Form.useForm();
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  let param = useParams();
  console.log(param);

  useEffect(() => {
    axios.get(`https://corona.lmao.ninja/v2/countries/${param.id}`).then((result) => {
      console.log('log1',result.data);
      setData(result.data);
    });
  }, []);




  return (<>
    <center>

    <div style={{ width : '800px',textAlign: 'center', padding: '10px 0px 10px 0px' }}>
        <h1>Country Detail</h1>
         <h2>{param.id}</h2>
         <p>casesPerOneMillion : {data.casesPerOneMillion}</p>
         <p>deathsPerOneMillion : {data.deathsPerOneMillion}</p>
         <p>testsPerOneMillion : {data.testsPerOneMillion}</p>
         <p>population : {data.population}</p>
      <a href={`/`}>
       <button>
       {"Back"}
     </button></a>
      </div></center>

     </>)

    
  
}


export default Country;