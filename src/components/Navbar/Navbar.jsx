/* eslint-disable no-unused-vars */
import React from 'react'

import './Navbar.css'
const Navbar = () => {

  
  return (
    <header id="home">
      <nav className='grid grid-col-1 sm:grid-cols-12 bg-portfolio items-center w-full sm:fixed'>

        <div className='sm:col-span-2 row-span-1 m-5'>
          <a href="#home"><img className="w-10" src="public\assets\diya.png" alt="Image" /></a>
        </div>

        <div className='sm:col-span-8 row-span-1 pl-5'>
          <ul className='sm:flex justify-center text-white text-md '>
            <li className='mt-5 sm:mr-10 items-center rounded-md hover:bg-portfolio-light p-4'><a href="#home" >Home</a></li>
            <li className='mt-5 sm:mr-10 items-center rounded-md hover:bg-portfolio-light p-4'><a href="#about" >About</a></li>
            <li className='mt-5 sm:mr-10 items-center rounded-md hover:bg-portfolio-light p-4'><a href="#works" >Works</a></li>
            <li className='mt-5 sm:mr-10 items-center rounded-md hover:bg-portfolio-light p-4'><a href="#certificates" >Certificates</a></li>
            <li className='mt-5 sm:mr-10 items-center rounded-md hover:bg-portfolio-light p-4'><a href="/contact">Contact Me</a></li>
          </ul>
        </div>

        <div className=' sm:col-span-2 sm:flex sm:justify-end m-5 p-8 row-span-1'>
          <a target='_blank' className='ml-5' href="https://github.com/zavesh14"><img className='w-8 sm:mr-10 mt-5' src="public\assets\github.png" alt="." /></a>
          <a target='_blank' className='ml-5' href="https://www.linkedin.com/in/deepak-kumar-sharma-04431b1b7/"><img className='w-8 sm:mr-10 mt-5' src="public\assets\Linkedin.png" alt="." /></a>
          <a target='_blank' className='ml-5' href="https://www.instagram.com/zavesh_ff/"><img className='w-8 sm:mr-10 mt-5' src="public\assets\insta.png" alt="." /></a>
          
          
        </div>
      </nav>
    </header>
  )
}

export default Navbar