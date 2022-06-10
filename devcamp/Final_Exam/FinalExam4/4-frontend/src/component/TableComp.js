import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Table, Avatar } from 'antd';


export default function TableComp() {
  let navigate = useNavigate();

  function detailFunc(record) {
console.log(record.country);
navigate(`/${record.country}`)
  }

 const columns = [

   {
     title: 'country',
     dataIndex: 'country',
     key: 'country',
   },
   {
     title: 'todayCases',
     dataIndex: 'todayCases',
     key: 'todayCases',
   },
   {
    title: 'todayDeaths',
    dataIndex: 'todayDeaths',
    key: 'todayDeaths',
  },
  {
    title: 'todayRecovered',
    dataIndex: 'todayRecovered',
    key: 'todayRecovered',
  },
  {
    title: 'Action',
    key: 'Action',
    dataIndex: 'Action',
    render: (text, record) => (
     <div>
       {/* <a href={`${record.id}`}> */}
       <button onClick={()=> detailFunc(record)}>
       {"More"}
     </button>
     {/* </a> */}
     &nbsp;

        </div>

    ),
  },
 ];


 const [data, setData] = useState([]);
 useEffect(() => {
  axios.get('https://corona.lmao.ninja/v2/countries').then((result) => {
     setData(result.data);
     console.log(data);
   });
 }, []);
 return <div> < Table dataSource={data} columns={columns} pagination={false} />;</div>
}