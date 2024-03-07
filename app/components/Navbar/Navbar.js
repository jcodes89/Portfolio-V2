import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='relative'>
    <nav className='h-14 w-full flex flex-row justify-between items-center text-xl font-semibold text-accent'>
      <div className='header-left pl-4 '>
        <div className='logo'>
          <Link href={'/'}>
            J DEV
          </Link>
        </div>
      </div>
      <div className='header-right pr-4'>
        <ul className='flex'>
          <li className='px-3'><i class="fa-solid fa-moon hover:text-black cursor-pointer"></i></li>
          <li className=''>
            <div class="dropdown dropdown-bottom dropdown-left">
              <div className='' tabindex="0"><i className=" focus:rotate-90 after::rotate-90  fa-solid fa-bars cursor-pointer"></i></div>
                <ul tabindex="0" className="dropdown-content z-[1] menu p-2 shadow-md shadow-primary border-white bg-primary rounded-box w-18 text-center">
                  <li><Link href='https://www.linkedin.com/in/jeremy-sluder-0077b099/' target='_blank'><i class="fa-brands fa-linkedin text-3xl"></i></Link></li>
                  <li><Link href='https://github.com/jcodes89' target='_blank'><i class="fa-brands fa-github text-3xl"></i></Link></li>
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