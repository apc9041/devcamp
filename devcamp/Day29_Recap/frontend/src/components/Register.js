import React, { useRef } from 'react';
import axios from 'axios';

const Register = () => {

  const nameRef = useRef('');
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const handleRegister = async (e) => {
    e.preventDefault()

    const registerObj = {
      name: nameRef.current.valueOf,
      username: usernameRef.current.valueOf,
      password: passwordRef.current.valueOf,
      confirmPassword: confirmPasswordRef.current.valueOf,
    }
    console.log(registerObj);
    const results = await axios.post('http://localhost:3000/api/user/register', registerObj)
  }

  return (
    <div style={{ padding: '5rem' }}>
      <h3>Register</h3>
      <hr />

      <div>
        <label htmlFor=''> Name : </label>
        <input type='text' ref={nameRef} required />
      </div>
      <div>
        <label htmlFor=''> Username : </label>
        <input type='text' ref={usernameRef} required />
      </div>
      <div>
        <label htmlFor=''> Password : </label>
        <input type='password' ref={passwordRef} required />
      </div>
      <div>
        <label htmlFor=''> Confirm Password : </label>
        <input type='password' ref={confirmPasswordRef} required />
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register