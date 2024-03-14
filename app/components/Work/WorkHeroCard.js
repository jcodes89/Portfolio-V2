'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'






const WorkHeroCard = (props) => {
  gsap.registerPlugin(ScrollTrigger)
  const container = useRef()

  useGSAP(() => {

    const img = document.querySelector('.image')

    const animation = gsap.to('.hide', {
      display: 'flex'
    })

    img.addEventListener('fullscreenchange', () => {

    }
    )


  }, {scope: container})

  return (
    <div className='card h-fit w-full p-0 shadow-md shadow-primary rounded-md my-5 hide hidden -translate-x-[1000px]'>
        <div className='projectImage p-0 '>
            <Link href={`/work/${props.projectLink}`}  className='w-full h-full'>
              <Image src={props.projectImage} className='image rounded-t-md' alt='Image of different web developer projects'/>
            </Link>
        </div>
        <div ref={container} className='hide hidden'>
          <div className='projectHeader border-b-4 border-accent'>
            <h2 className='my-3 pl-3 text-accent font-bold text-3xl'>{props.projectHeading}</h2>
          </div>
          <div className='projectTable'>
            <table className='w-full text-white text-base'>
              <tbody className=''>
                <tr className=''>
                  <td className='techHeader pl-3 py-3 text-lg font-bold'>
                    Technologies
                  </td>
                  <td className='text-center'>
                    <ul className='p-3 '>
                        {props.listItem}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default WorkHeroCard

{/* <div className='card w-full h-fit lg:w-[75%] xl:w-[50%]'>
        <div id='heroCard'>
          <div id='heroMain' className='p-3 py-5 w-full  rounded-md mt-4 text-accent shadow-primary  shadow-md'>
            <h2 className='text-[5rem] font-bold lg:text-[7rem] xl:text-[8rem]'>Web Developer</h2>
            <ul className='pb-1'>
              <li className=' text-lg font-bold text-gray-50  lg:text-2xl'>Skills: <span className='language'></span> </li>
            </ul>
            <p className='text-leftpt-2 text-gray-200 lg:text-2xl'>Web developer dedicated to crafting seamless, user-centric digital experiences with a focus on precision and innovation.</p>
          </div>

        </div>
      </div> */}