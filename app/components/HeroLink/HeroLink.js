import React from 'react'
import Link from 'next/link'

const HeroLink = (props) => {
  return (
    <li className=' w-full my-2 p-4 h-40 lg:h-96 rounded-lg flex justify-center items-center shadow-lg shadow-accent text-secondary bg-[url("../public/images/pawel-czerwinski-fRzUPSFnp04-unsplash.jpg")] bg-right bg-no-repeat md:hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-50 hover:bg-right-top hover:text-accent hover:ease hover:duration-1000  hover:text-8xl'>
        <Link href='/work' className=''>{props.link}</Link>
    </li>
  )
}

export default HeroLink