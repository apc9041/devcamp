import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { Button, Form, Input, Space, Layout, InputNumber, Table } from 'antd';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import MyUpload from './UploadButton';
// import { data } from './SubEdit';




const EditProduct = () => {
  const [PhotoName, setPhotoName] = useState('');
  const [form] = Form.useForm();
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://52.77.238.229:3000/api/users').then((result) => {
      console.log(result.data);
      // console.log(result.data[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]);
      // console.log( result.data.id===2 );
      setData(result.data);
    });
  }, []);




  const onFinish = async (values) => {
    console.log('values of form: ', values);
    // console.log('You added :', values.ProductName);
    await axios.put(`http://52.77.238.229:3000/api/users/edit/${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}`, {
        ProductName: values.ProductName,
        Photo: PhotoName,
        StockLeft: values.StockLeft,
        Category: values.Category,
      })
    alert("Thank you for submitting the form!");
    await navigate('/');
    // document.getElementById('resetForm').reset();  ****** Reset ไม่ทำงาน
    
  };
  // window.location.href='/'




  return (<>
    <center>
    <div style={{ width : '800px',textAlign: 'right', padding: '10px 0px 10px 0px' }}>
      <Link to={`/`}>
       <button class="button-71">
       {"Dash Board"}
     </button></Link>
      </div></center>

    <Form form={form} onFinish={onFinish}>
      <center style={{ backgroundColor: '#424242' }}>
        <div className='BoxB'>
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h2 style={{ color: 'white' }}>:: Edit Product ::</h2>
            {/* <h2>{data[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)].ProductName}</h2> */}
          </div>
          <div>
            <Layout style={{ backgroundColor: '#424242' }}>


              {/* ------ProductName------------------------------------------------- */}
              <Form.Item
                name="ProductName"
                // label="usename"
                rules={[
                  {
                    required: true,
                  },
                ]}
                hasFeedback
              >

                <tr>
                  <td style={{ width: '150px' }}><p style={{ color: 'white', textAlign: 'left' }}>Product Name : &nbsp;&nbsp;</p></td>
                  {/* <td style={{ width: '150px' }}>
                <p style={{ color: 'white', textAlign: 'left' }}>
                {data[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)].ProductName}
                </p></td> */}
                  <td style={{ width: '80px' }}><p style={{ color: 'white', textAlign: 'left' }}> change to :</p></td>
                  <td style={{ width: '200px' }}><p><Input /> </p></td></tr>
              </Form.Item>

              {/* ------Photo------------------------------------------------- */}
              <Form.Item
                name="Photo"
                // label="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
                hasFeedback>

                <tr>
                  <td style={{ width: '150px' }}><p style={{ color: 'white', textAlign: 'left' }}>Photo : &nbsp;&nbsp;</p></td>
                  {/* <td style={{ width: '150px' }}>
                <p style={{ color: 'white', textAlign: 'left' }}>
                {data[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)].Photo}
                </p></td> */}
                  <td style={{ width: '80px' }}><p style={{ color: 'white', textAlign: 'left' }}> change to :</p></td>
                  <td style={{ width: '200px' }} ><MyUpload setPhotoName = {setPhotoName} /> </td>
                </tr>


              </Form.Item>

              {/* ------StockLeft------------------------------------------------- */}
              <Form.Item
                name="StockLeft"
                // label="password"
                rules={[
                  {
                    required: true,
                    min: 1,
                    max: 99,
                  },
                ]}
                hasFeedback>
                <tr><td style={{ width: '150px' }}><p style={{ color: 'white', textAlign: 'left' }}>Stock Left  : &nbsp;&nbsp;</p></td>
                  {/* <td style={{ width: '150px' }}>
                <p style={{ color: 'white', textAlign: 'left' }}>
                {data[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)].StockLeft}
                </p></td> */}
                  <td style={{ width: '80px' }}><p style={{ color: 'white', textAlign: 'left' }}> change to :</p></td>
                  <td style={{ width: '200px' }}><p><InputNumber /> </p></td></tr>
              </Form.Item>

              {/* ------Category------------------------------------------------- */}
              <Form.Item
                name="Category"
                // label="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
                hasFeedback>
                <tr><td style={{ width: '150px' }}><p style={{ color: 'white', textAlign: 'left' }}>Category : &nbsp;&nbsp;</p></td>
                  {/* <td style={{ width: '150px' }}>
                <p style={{ color: 'white', textAlign: 'left' }}>
                {data[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)].Category}
                </p></td> */}
                  <td style={{ width: '80px' }}><p style={{ color: 'white', textAlign: 'left' }}> change to :</p></td>
                  <td style={{ width: '200px' }}><p><Input /> </p></td></tr>
              </Form.Item>


              {/* ------submit------------------------------------------------- */}
              <Form.Item
              // wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
              ><div style={{ textAlign: 'center' }}>
                  <tr>&nbsp;</tr>
                  <tr>&nbsp;</tr>
                  <tr>&nbsp;</tr>
                  <button class="button-71" role="button"
                    type="primary"
                    htmlType="submit"
                  >
                    Edit Product
                  </button></div>

              </Form.Item>

            </Layout>
          </div>

        </div></center>
    </Form> 
    
     </>)

    
  
}


export default EditProduct