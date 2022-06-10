import React, { useRef, useState } from 'react'
import { Button, Form, Input, Space, Layout, InputNumber, Inputupload } from 'antd';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import MyUpload from './UploadButton'




const NewProduct = () => {
  const [PhotoName, setPhotoName] = useState('');
  //     const refName = useRef('');
  //     const refPhoto = useRef('');
  //     const refStockLeft = useRef(0);
  //     const refCategory = useRef('');


  //-------------------------------------------------------------------------------------------------------------------
  //     function onSubmit (e) {
  //         e.preventdefault()
  //         const obj = {
  //             Name: refName.current.value,
  //             Photo: refPhoto.current.value,
  //             StockLeft: refStockLeft.current.value,
  //             Category: refCategory.current.value,
  //         }

  //     }
  //     return (

  //         <div>
  //             <center>
  //             <tr>
  //                 <td style={{color:'white',textAlign:'left'}}>Product Name : &nbsp;</td>
  //                 <td><input ref={refName} type='text' placeholder='Product Name' ></input></td>
  //             </tr>
  //             <tr>&nbsp;</tr>
  //             <tr>
  //                 <td style={{color:'white',textAlign:'left'}}>Photo : &nbsp;</td>
  //                 <td><input ref={refPhoto} type='text' placeholder='Photo' ></input></td>
  //             </tr>
  //             <tr>&nbsp;</tr>
  //             <tr>
  //                 <td style={{color:'white',textAlign:'left'}}>Stock Left : &nbsp;</td>
  //                 <td><input ref={refStockLeft} type='number' placeholder='StockLeft' ></input></td>
  //             </tr>
  //             <tr>&nbsp;</tr>
  //             <tr>
  //                 <td style={{color:'white',textAlign:'left'}}>Category : &nbsp;</td>
  //                 <td><input ref={refCategory} type='text' placeholder='Category' ></input></td>
  //             </tr>
  //             <tr>&nbsp;</tr>
  //             <tr>
  //                 <td><button class="button-71" role="button" onClick={onSubmit}>Create</button></td>
  //             </tr>
  //             <tr>&nbsp;</tr>
  //             <tr>&nbsp;</tr>
  //             </center>
  //         </div>
  //     )
  //----------------------------------------------------------------------------------------------------------------------
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const onFinish = async (values) => {

    console.log('values of form: ', values);
    console.log('You added :', values.ProductName);

    const PostFunc = async () => {
      await axios.post('http://localhost:3000/api/users', {
        ProductName: values.ProductName,
        Photo: PhotoName,
        StockLeft: values.StockLeft,
        Category: values.Category,
      });
      // await axios.post('http://localhost:3000/users/upload', {
      // ProductName: values.ProductName,
      // Photo: values.Photo,
      // StockLeft: values.StockLeft,
      // Category: values.Category,
      // })
    };
    PostFunc();
    alert("Thank you for submitting the form!");
    // document.getElementById('resetForm').reset();
    await navigate('/');
  };
  



  return (<>
    <center>
      <div style={{ width: '800px', textAlign: 'right', padding: '10px 0px 10px 0px' }}>
        <a href={`/`}>
          <button class="button-71">
            {"Dash Board"}
          </button></a>
      </div></center>
    <Form form={form} onFinish={onFinish}

    >
      <center style={{ backgroundColor: '#424242' }}>
        <div className='BoxB'>
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h2 style={{ color: 'white' }}>:: New Product ::</h2>

          </div>
          <div>
            <Layout style={{ backgroundColor: '#424242' }}>


              {/* ------Firstname------------------------------------------------- */}
              <Form.Item
                name="ProductName"
                // label="usename"
                rules={[
                  {
                    required: true,
                  },
                ]}
                hasFeedback
              ><tr>
                  <td style={{ width: '150px' }}><p style={{ color: 'white', textAlign: 'left' }}>Product Name : &nbsp;&nbsp;</p></td>
                  <td style={{ width: '300px' }}><p><Input /> </p></td></tr>
              </Form.Item>

              {/* ------Lastname------------------------------------------------- */}
              <Form.Item
                name="Photo"
                // label="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
                hasFeedback>
                <tr><td style={{ width: '150px' }}><p style={{ color: 'white', textAlign: 'left' }}>Photo : &nbsp;&nbsp;</p>
                </td>
                  {/* <td style={{ width: '300px' }}><p><Input type='file' /> </p></td> */}
                  <td style={{ width: '300px' }} ><MyUpload setPhotoName = {setPhotoName} /> </td>
                </tr>
              </Form.Item>

              {/* ------firstname------------------------------------------------- */}
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
                <tr><td style={{ width: '150px' }}><p style={{ color: 'white', textAlign: 'left' }}>Stock Left  : &nbsp;&nbsp;</p>
                </td><td style={{ width: '300px' }}><p><InputNumber /> </p></td></tr>
              </Form.Item>

              {/* ------Lastname------------------------------------------------- */}
              <Form.Item
                name="Category"
                // label="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
                hasFeedback>
                <tr><td style={{ width: '150px' }}><p style={{ color: 'white', textAlign: 'left' }}>Category : &nbsp;&nbsp;</p>
                </td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
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
                    Create Product
                  </button></div>
              </Form.Item>

            </Layout>
          </div>

        </div></center>
    </Form> </>);




}

export default NewProduct