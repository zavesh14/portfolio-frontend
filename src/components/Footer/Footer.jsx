/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark-gray w-screen h-28'>
        <div >
            <ul className='flex justify-center p-10 md:gap-x-60 gap-x-20'>
                <li><a target='_blank' href="https://github.com/zavesh14"><img className='md:w-8 w-10' src="public\assets\github-light.png" alt="" /></a></li>
                <li><a target='_blank' href="https://www.instagram.com/zavesh_ff/"><img className='md:w-8 w-10' src="public\assets\insta-light.png" alt="" /></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/deepak-kumar-sharma-04431b1b7/" ><img className='md:w-8 w-10' src="public\assets\Linkedin-light.png" alt="" /></a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer