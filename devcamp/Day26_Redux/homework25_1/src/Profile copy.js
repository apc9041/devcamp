import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeLastname } from "../profileReducer";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import { Provider } from 'react-redux'

function Profile() {
  // ใช้เรียก Actions

  return (
    <>
      <ProfileComp />
      <hr />
    </>
  );
}



function ProfileComp() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
   <center> <div>
      <p>{JSON.stringify(profile)}</p><br/>
      <p>Firstname: <input type="text" onChange={(e) => dispatch(changeName(e.target.value))} /></p><br/>
      <p>Lastname: <input type="text" onChange={(e) => dispatch(changeLastname(e.target.value))}/></p>
      </div></center>
      </>
  );
}
export default Profile;
