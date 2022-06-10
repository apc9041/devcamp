import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function Profile() {
 let navigate = useNavigate();
 const [cart, setCart] = useState([]);
 const [username, setUsername] = useState([]);
 const [firstname, setFirstname] = useState([]);
 const [lastname, setLastname] = useState([]);
 const [email, setEmail] = useState([]);
 const [mobile_phone, setmobile_phone] = useState([]);

function Logout() {
    localStorage.removeItem('token');
        navigate('/login');
};




 useEffect(() => {
   const token = localStorage.getItem('token');
   if (token) {
     axios
       .get('/api/users/mycart', {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       })
       .then((res) => {
         setCart(res.data);
         console.log(token);
       })
       .catch((err) => {
         if (err.response.status === 401) {
           // token expired - remove and redirect to login
           localStorage.removeItem('token');
           navigate('/login');
         }
       });
   } else {
     navigate('/login');
   }
 }, []);



useEffect(() => {

  const token = localStorage.getItem('token');
  //    decode token
     var decoded = jwt_decode(token);
     console.log(decoded);
  //    call username by using useState 
     const username = decoded.username; 
     setUsername(username);

     const firstname = decoded.firstname; 
     setFirstname(firstname);

     const lastname = decoded.lastname; 
     setLastname(lastname);

     const email = decoded.email; 
     setEmail(email);

     const mobile_phone = decoded.mobile_phone; 
     setmobile_phone(mobile_phone);
   
   })
 
  return (
    <>
      <h2 className = "login">Hey {username} !  </h2>
      <h2 className = "login">Firstname : {firstname} !  </h2>
      <h2 className = "login">lastname : {lastname} !  </h2>
      <h2 className = "login">Email : {email} !  </h2>
      <h2 className = "login">Mobile Phone : {mobile_phone} !  </h2>
      <h2 className = 'space'> welcome to your page!</h2>
      <h3 className = "space">My shopping cart items</h3>
      <ul className = "space">{cart && cart.map((c) => <li>{c.item}</li>)}</ul>
        <button onClick={Logout}> Log-out</button>

    </>
  );
 }


