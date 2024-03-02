/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import './Skills.css'
const Skills = () => {
    const skills = ["Java", "Spring Boot", "HTML", "CSS / TailwindCSS", "Javascript", "NodeJS"];
    const skills2 = ["UI/UX", "Hibernate", "MySQL", "JPA", "ReactJS", "C++"];
  return (
    <div id="skills" className="info ml-5">
         <h1 className='text-xl skill-h'>Skills</h1>
        <p className='line'></p>
        <div className='grid grid-cols-2 p-20' >
           
            <div className='col-span-1 '>
                <ul className='list-disc '>
                    {skills.map((skill, index) => (
                         <li key={index} className='mb-5 font-bold text-dark-gray'>
                         {skills[index]}</li>
                  ))}
                </ul>
            </div>
            <div className='col-span-1'>
                <ul className='list-disc'>
                <ul className='list-disc '>
                    {skills2.map((skill, index) => (
                         <li key={index} className='mb-5 font-bold text-dark-gray'>
                         {skills2[index]}</li>
                  ))}
                </ul>
                </ul>
            </div>
            

        </div>
    </div>
  )
}

export default Skills