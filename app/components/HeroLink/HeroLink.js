'use client'
import Link from 'next/link'
import React, {useRef} from 'react'


const HeroLink = (props) => {


  return (
    <div className='' >
      <li className='links hidden w-full my-2 p-4 h-40 lg:h-96 rounded-lg justify-center items-center shadow-lg shadow-accent text-secondary bg-[url("../public/images/pawel-czerwinski-fRzUPSFnp04-unsplash.jpg")] bg-right bg-no-repeat hover:shadow-lg hover:shadow-gray-50 hover:bg-right-top hover:text-accent hover:ease hover:duration-1000  hover:text-8xl'>
          <Link href={props.href} className=''>{props.link}</Link>
      </li>

    </div>
  )
}

export default HeroLink