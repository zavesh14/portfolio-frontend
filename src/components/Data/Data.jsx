/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Data.css'

const Data = () => {
  return (
    <main id="about bg-">
        <div className=''>
            <div className='text-center mb-20'>
                <h1 className='md:text-5xl text-2xl'><strong><i>"Never Stop Learning"</i></strong></h1>
            </div>
            <div className='ml-5 mb-10'>
                <h1 className='text-xl'><strong>Know me</strong></h1>
                <p className='line'></p>
                <br/>
                <p className='max-w-3xl ml-10'>
                Dear Reader,
                <br/>
                <br/>
                Allow me to introduce myself—I hail from the charming town of Gangtok nestled in the heart of Sikkim,
                 renowned for its breathtaking landscapes. Currently pursuing B.Tech in Computer Science and Engineering,
                  my passion lies in the realm of software development. Proficient in Java, HTML, CSS, JavaScript, ReactJS,
                   and Spring Boot, I am dedicated to crafting innovative digital solutions. Described as a silent observer,
                    I find joy in exploring new destinations and immersing myself in nature's beauty. With a penchant for hard
                     work and kindness, I embody the spirit of an aspiring developer and adventurous soul.
                </p>
                <br/>
            </div>
            <div className='row-span-1 ml-5 mb-20'>

                <h1 className='text-xl'>Qualification</h1>
                <p className='line'></p>
                <div className='ml-10'>
                <div className='mt-10'>
                    <h1 className='text-2xl'><strong>B.Tech. in Computer Science and Engineering</strong> </h1>
                    <h2 className=''><strong>Aug '20 – Aug ‘24</strong></h2>
                    <p>Lovely Professional University |Phagwara, IN</p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl'><strong>Higher Secondary</strong> </h1>
                    <h2 className=''><strong>March '18 - Dec'19</strong></h2>
                    <p>West Point Senior Secondary
                    School | Gangtok, IN
                    </p>
                </div>
                </div>
                
            </div>
        </div>


    </main>
  )
}

export default Data