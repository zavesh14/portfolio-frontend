/* eslint-disable no-unused-vars */
import React from 'react';
//import Navbar from '../Navbar/Navbar.jsx';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Contact = () => {
  const [userData, setUserData] = useState({
    'name': '',
    'email' : '',
    'message' : ''
  })

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    if (!userData.name || !userData.email || !userData.message) {
      alert('Please fill in all fields');
      return;
    }
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5151/contact', userData);

      if(response.status == 200){
        console.log('Email sent');
      }
      // console.log('Response:', response.data);
      // Clear the form after successful submission
      setUserData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }finally{
      setTimeout(() => setLoading(false) , 5000);
    }
  };
  return (
    <div>
      <div>
        <nav className='z-10 flex items-center w-full bg-portfolio sm:fixed  sm:justify-between'>
          <div className='m-5'>
            <a href="#home"><img className="p-3 rounded-md hover:bg-gray" src="public\assets\diya.png" alt="Image" /></a>
          </div>
          <div className='flex pt-8 pb-8 m-5 mr-43 sm:gap-32'>
            <a target='_blank' className='' href="https://github.com/zavesh14"><img className=' w-16 p-2 mt-5 rounded-md hover:bg-gray sm:mr-10' src="public\assets\github.png" alt="." /></a>
            <a target='_blank' className='ml-5' href="https://www.linkedin.com/in/deepak-kumar-sharma-04431b1b7/"><img className='w-16 p-2 mt-5 rounded-md hover:bg-gray sm:mr-10' src="public\assets\Linkedin.png" alt="." /></a>
            <a target='_blank' className='ml-5' href="https://www.instagram.com/zavesh_ff/"><img className=' w-16 p-2 mt-5 rounded-md hover:bg-gray sm:mr-10' src="public\assets\insta.png" alt="." /></a>
          </div>
          <button className='p-3 mr-10 text-white rounded-md bg-dark-gray hover:bg-gray hover:text-dark-gray'>
            <Link to='/'>Return to main page</Link>
          </button>
        </nav>
      </div>
      <br />

      <div className='z-0 sm:max-w-lg mx-auto sm:mt-36 mt-10 drop-shadow-2xl pt-10'>
        <h1 className='text-3xl font-bold text-center sm:text-center'>Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='p-6'>
            <span>Name:</span><br /><input className='w-full p-3 mt-5 shadow-md border-gray hover:bg-gray' type="text"
              placeholder='Enter your name here'
              onChange={e => setUserData({...userData, name:e.target.value})}
            value={userData.name}
            />
          </div>
          <div className='p-6'>
            <span>Email:</span><br /><input className='w-full p-3 mt-5 shadow-md border-gray hover:bg-gray' type="email"
              placeholder='Enter you email here'
              onChange={e => setUserData({...userData, email:e.target.value})}
            value={userData.email}
            />
          </div>
          <div className='p-6'>
            <span>Reason for the message:</span>
            <br />
            <textarea className='w-full p-3 mt-5 shadow-md border-gray hover:bg-gray' name="" id="" cols="10" rows="5"
              placeholder='Enter your message: '
              onChange={e => setUserData({...userData, message:e.target.value})}
            value={userData.message}
            ></textarea>

            <div className='flex items-center justify-center mt-5'>
              <button className='w-32 p-4 rounded bg-blue-500 hover:bg-blue-400'>Send</button>
              {loading && <div>Sending...</div>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};  

export default Contact;
