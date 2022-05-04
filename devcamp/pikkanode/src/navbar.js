import React from 'react';
import './App.css'




class Navbar extends React.Component {
  render() {
    return <div>



<nav class="navbar navbar-expand-sm navbar-dark bg-info justify-content-between">
<img src='https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png' width="150" height="80" style={{padding:"10px"}}/>
<ul class="navbar-nav">
    <li class="nav-item">
      
        <a href="#" class="nav-link">Create Pikka</a>
    </li>
    <li>
        <a href="#" class="nav-link">SignUp</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#list_Member">SignIn</a>
    </li>

    
    <li class="nav-item">
        <a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">SignOut</a>
    </li>
</ul>
</nav>

    </div>
  }
}


export default Navbar;