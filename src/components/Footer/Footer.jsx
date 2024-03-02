/* eslint-disable no-unused-vars */
import React from 'react'
import github from '../assets/github-light.png'

import insta from '../assets/insta-light.png'
import linkedin from '../assets/Linkedin-light.png'
const Footer = () => {
  return (
    <footer className='bg-dark-gray w-screen h-28'>
        <div >
            <ul className='flex justify-center p-10 md:gap-x-60 gap-x-20'>
                <li><a target='_blank' href="https://github.com/zavesh14"><img className='md:w-8 w-10' src={github} alt="" /></a></li>
                <li><a target='_blank' href="https://www.instagram.com/zavesh_ff/"><img className='md:w-8 w-10' src={insta} alt="" /></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/deepak-kumar-sharma-04431b1b7/" ><img className='md:w-8 w-10' src={linkedin} alt="" /></a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer