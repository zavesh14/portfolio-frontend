/* eslint-disable no-unused-vars */
import React from 'react'
import './Certificate.css'
const Certificate = () => {
  return (
    <div id='certificates' className='certificate'> 
      <h1 className='text-xl skill-h ml-5'>Certificates</h1>
        <p className='line ml-5'></p>
      <div className='cert-list'>
        <ul className='list-disc ml-10 mt-10 p-5'>
          <li className='mb-3'>Object Oriented Programming Language | Udemy</li>
          <li className='mb-3'>DBMS-Part-1 | Infosys SpringBoard </li>
          <li className='mb-3'>	UI/UX design (Figma/Adobe XD) Linkedin </li>
          <li className='mb-3'>	Full Stack Web Development | Udemy </li>
          <li className='mb-3'>	Ethical Hacking: Beginner to Advanced | Udemy </li>
          <li className='mb-3'>	Mini course on Time Management | Udemy </li>
        </ul>
      </div>
  </div>
  )
}

export default Certificate