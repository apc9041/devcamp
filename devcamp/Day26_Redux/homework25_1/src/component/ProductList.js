import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Outlet, Link } from 'react-router-dom'; 
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeLastname, changeAge } from "./ProductReducer";


function ProductList() {

        // ใช้เรียก Actions
      
        return (
          <>
            <Products />
            <hr />
          </>
        );
      }
      
      
      
      function Products() {
        const product = useSelector((state) => state.product);
        const dispatch = useDispatch();
      
        return (
          <>
         <center> <div>
            <p>{JSON.stringify(product)}</p><br/>
            <p>Firstname: <input type="text" onChange={(e) => dispatch(changeName(e.target.value))} /></p><br/>
            <p>Lastname: <input type="text" onChange={(e) => dispatch(changeLastname(e.target.value))}/></p>
            </div></center>
            </>
        );
      }


export default ProductList;