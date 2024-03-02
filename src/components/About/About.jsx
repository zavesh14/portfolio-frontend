/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ReactTyped } from 'react-typed'
import './About.css'
import pic from 'public\assets\pic.png';
const About = () => {
  return (
    <section  className='grid grid-cols-2 '>
      <div className='col-span-1 text-center m-5 sm:m-20 md:m-40'>
        <h1><i>Hello, I'm</i></h1>
        <h1 className='text-3xl'><strong>Deepak Kumar Sharma
          <br />
          <ReactTyped strings={["Software Engineer", "Fronted Engineer", "Backend Engineer"]} typeSpeed={40} backSpeed={40} loop/>
          </strong></h1>
        <div className='w-auto md:mt-10 mt-5'>
          <p className='text-xl'>"Enthusiastic CSE engineer, fueled by innovation, adept in software development, poised to excel in dynamic tech environments."</p>
        </div>
        <br />
        <div className='flex flex-col'>
          <button className=" btn mt-10 items-center text-lg rounded p-2 hover:bg-gray">Contact Me</button>
          <button className=" btn mt-10 items-center text-lg rounded p-2 hover:bg-gray"><a href="https://drive.google.com/file/d/1mO4ZxpuVn7kufwWEv2VzHX6qmyxUcaEJ/view?usp=sharing" download target='_blank'>My Resume</a></button>
        </div>
      </div>
      <div className='sm:col-span-1 sm:p-10 sm:ml-16'>
          <img className='w-25 rounded-lg' src={pic} alt="" />
      </div>
    </section>
  )
}

export default About