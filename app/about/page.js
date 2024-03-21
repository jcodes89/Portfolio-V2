import React from 'react'
import Image from 'next/image'
import img from '@/public/Images/profile2.jpg'

const page = () => {
  return (
    <>
    <main className='relative z-10 w-full h-full flex flex-col  text-center top-16 p-3 md:px-4 text-gray-50 lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:gap-3'>
      <div className='flex flex-col justify-center align-middle pb-4  mx-4 '>
        <div className='aboutTitle p-4'>
          <h2 className='font-bold text-4xl lg:text-6xl'>About Me</h2>
        </div>
        <div className='aboutText text-left  p-4 rounded-md shadow-md shadow-primary '>
          <h3 className='text-xl md:text-2xl lg:text-2xl py-3'>I am a Web Developer based in Florida</h3>
          <p className='text-base md:text-lg lg:text-xl'>I created my first web site in 2021 and fell in love with the process.  I enjoy creating lasting unique experiences and continuing to gain knowledge and experience as a Web Developer.  </p>
        </div>
      </div>
      <div className='aboutImage flex justify-center items-center'>
        <Image src={img} alt='image of Jeremy' className='h-auto w-auto rounded-md shadow-md shadow-primary lg:h-[80%]'/>
      </div>
    
    </main>
    <section className='mt-3 lg:px-4 lg:my-3'>
      <div className='relative w-full h-full text-primary bg-gray-50 top-16 pt-4 p-4 lg:rounded-md lg:shadow-md lg:shadow-primary'>
        <div className='text-center'>
          <h4 className='text-xl font-bold pb-2'>My Story</h4>
          <p className='text-left'>
            My journey as a Web Developer started back in 2021 when I first wanted to make my own website for my leather buisness.
            I was currently using squarespace but it lacked the simplistic nature which I wanted for a website. The main goal for my Davinch Leather website was to showcase
            my work and describe the process of how I create custom leather products.  This prompted me to start learning from Udemy and other sites which led me down the rabbit hole.  
          </p>
          <br/>
          <p className='text-left'>
          Looking back now, my Davinch website was nothing spectacular but building and creating 
            that website ignited a spark.  I have been constantly learning and growing since I started in 2021 and the passion to create has only grown.
            I am currently working as a Paramedic/Firefighter in Tampa, Fl and look forward to a career change.
          </p>
        </div>
      </div>

    </section>
    <section className='lg:px-4 lg:my-3'>
      <div className='relative w-full h-fit text-gray-50 text-center bg-accent  top-16 pt-4 p-4 lg:rounded-md lg:shadow-md lg:shadow-primary'>
        <div>
          <h5 className='text-xl font-bold pb-2'>
            When I'm not coding
          </h5>
        </div>
        <div>
          <ul>
            <li>Hanging with the Wife</li>
            <li>Longboarding</li>
            <li>Leather Working</li>
            <li>Knife Making</li>
            <li>Gaming on my NES and Gameboy</li>
            <li>Gameboy Restoration</li>
            <li>Working Out</li>
            <li>Paddle Boarding</li>
            <li>Fishing</li>
          </ul>
        </div>

      </div>
    </section>
    </>
  )
}

export default page