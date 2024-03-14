import React from 'react'
import Link from 'next/link'
import styles from '../../css/nav.module.css'
import {Titillium_Web } from "next/font/google";

const titilliumBold = Titillium_Web({weight: ['900'], subsets: ["latin"] });


const Navbar = () => {
  return (
    <header className='relative'>
    <nav className='h-14 w-full flex flex-row justify-between items-center text-xl font-semibold text-accent md:text-2xl'>
      <div className='header-left pl-4 '>
        <div className='text-base md:text-lg hover:text-gray-50'>
          <Link href={'/'} className={styles.logo} >
            Jeremy Sluder
          </Link>
          <span className={styles.hide}>
            <span className={titilliumBold.className}>
              Home
            </span>
          </span>
        </div>
      </div>
      <div className='header-right pr-4'>
        <ul className='flex'>
          <li className='px-3'><i className="fa-solid fa-moon hover:text-black cursor-pointer md:text-2xl"></i></li>
          <li className=''>
            <div className="dropdown dropdown-bottom dropdown-left md:hidden text-xl">
              <div className='' tabIndex="0"><i className=" focus:rotate-90 after::rotate-90  fa-solid fa-bars cursor-pointer"></i></div>
                <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow-md shadow-primary border-white bg-primary rounded-box w-18 text-center">
                  <li><Link href='https://www.linkedin.com/in/jeremy-sluder-0077b099/' target='_blank' className='my-1 hover:bg-accent hover:text-primary'><i className="fa-brands fa-linkedin text-3xl"></i></Link></li>
                  <li><Link href='https://github.com/jcodes89' target='_blank' className='hover:bg-accent hover:text-primary'><i className="fa-brands fa-github text-3xl"></i></Link></li>
                </ul>
            </div>
            <div className=''>
              <ul className=" hidden md:flex md:flex-row  border-white">
                    <li><Link href='https://www.linkedin.com/in/jeremy-sluder-0077b099/' target='_blank'><i className="fa-brands fa-linkedin text-3xl px-3 pl-0 hover:text-primary"></i></Link></li>
                    <li><Link href='https://github.com/jcodes89' target='_blank'><i className="fa-brands fa-github text-3xl hover:text-primary"></i></Link></li>
                  </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Navbar