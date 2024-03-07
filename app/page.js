// import Image from "next/image";

import HeroLink from './components/HeroLink/HeroLink';
import Navbar from './components/Navbar/Navbar';
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <main className='h-screen w-full absolute'>
      <section className=' h-[50%] flex justify-center items-center p-3 md:h-[100%]'>
        <div className='card h-fit w-full lg:w-[75%] xl:w-[50%]'>
          <div className=' p-3 py-5 w-full rounded-md mt-4 text-accent shadow-lg shadow-primary'>
          <h2 className='text-[4rem] font-bold lg:text-[7rem]'>Web Developer</h2>
            <ul className='pb-1'>
              <li className='text-md font-bold text-gray-50  lg:text-3xl'><span>JAVASCRIPT</span></li>
            </ul>
            <p className='text-leftpt-2 text-gray-200 lg:text-2xl'>Web developer dedicated to crafting seamless, user-centric digital experiences with a focus on precision and innovation.</p>
          </div>
        </div>
      </section>
      <section className='w-full h-[50%]'>
        <div>
          <ul className='grid grid-cols-1 w-full text-center h-fit px-3 py-0 text-gray-50 text-7xl md:grid-cols-2 md:gap-3 '>
            <HeroLink
              link='MY WORK'
            />
            <HeroLink
              link='ABOUT'
            />
            <HeroLink
              link='CONTACT'
            />
            <HeroLink
              link='RESUME'
            />
          </ul>
        </div>
      </section>
    </main>
    
    </>
  );
}
