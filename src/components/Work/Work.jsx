/* eslint-disable no-unused-vars */
import React from 'react'
import './Work.css'
const Work = () => {
  return (
    <div id="works" className='work ml-5'>
            <h1 className='text-xl skill-h'>Works</h1>
            <p className='line'></p>
            <ul className=' ml-10'>
              <li className='mb-20'>
                  <div className='mt-10'>
                    <h1 className='text-xl'><strong>University Management System, Java</strong></h1>
                    </div>
                    <span>
                      <h2><strong>May’23-June’23</strong></h2>
                    </span>
                    <div className='max-w-4xl mt-7'>
                      <ul className='list-disc ml-5'>
                        <li className='mb-5'>Developed user-friendly university management system in Java with Swing, AWT, and MySQL, streamlining administrative tasks and enhancing user experience.</li>
                        <li>Utilized object-oriented principles to create efficient features such as student registration, course management, grade tracking, and insightful reporting, improving decision-making for Administrators</li>
                      </ul>
                    </div> 
              </li>

              <li className='mb-20'>
                  <div className='mt-10'>
                    <h1 className='text-xl'><strong>Note-making web app</strong></h1>
                    </div>
                    <span>
                      <h2><strong>Nov’22-Feb’23</strong></h2>
                    </span>
                    <div className='max-w-4xl mt-7'>
                      <ul className='list-disc ml-5'>
                        <li className='mb-5'>
                             Developed a dynamic note-making web application using HTML, CSS, JavaScript, Bootstrap, PHP, NodeJs and MySQL, incorporating features such as login credentials, forgot password, and remember me options.
                        </li>
                        <li> Designed and implemented a user-friendly interface with robust security measures, ensuring a seamless experience for users while safeguarding their data.
                            </li>
                      </ul>
                    </div> 
              </li>

              <li className='mb-20'>
                  <div className='mt-10'>
                    <h1 className='text-xl'><strong>Chatting Application, Java</strong></h1>
                    </div>
                    <span>
                      <h2><strong>Feb’23-Feb’23</strong></h2>
                    </span>
                    <div className='max-w-4xl mt-7'>
                      <ul className='list-disc ml-5'>
                        <li className='mb-5'>
                        Designed and developed a real-time chatting application using Java programming language with socket programming features to enable users to communicate with each other seamlessly and securely
                        </li>
                        <li> Implemented features such as swing and awt, which enhance the usability and functionality of the application.</li>
                      </ul>
                    </div> 
              </li>
              
            </ul>
    </div>
  )
}

export default Work