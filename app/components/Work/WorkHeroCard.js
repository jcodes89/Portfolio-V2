// 'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Observer from 'gsap/Observer'
import styles from '../../css/work-card.module.css'




const WorkHeroCard = (props) => {
  gsap.registerPlugin(ScrollTrigger, Observer)
  const container = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.pause()
    
    tl.to('#hideCard', {
      display:'block',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: '.9',
      duration: 1, 
      ease: 'expo.inOut',
      stagger:1,
      
      
    })
    .to('#hideHead', {
      display:'block',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: '1',
    })
    .to('#hideBtn', {
      display:'block',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: '1',
 
    })
    .to('#hideList', {
      display:'block',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: '1',

    })
    

    // tl.to('#hide', {
    //   display: 'flex'
    // })
    // const img = document.getElementById('#img')
    // const hidden = document.getElementById('#hide')
    

    // window.addEventListener('DOMContentLoaded', (e) => {
    //   if(img){
    //     img.addEventListener('mouseenter', () => {
    //       tl.play()
    //     })

    //   }
    

    // })

  Observer.create({
    target: '#img',
    type: 'touch, wheel, pointer',
    onHover: () => {
      tl.play()
    },
    onHoverEnd: () => {
      tl.reverse()
    },

  })
    


  }, {scope: container})

  return (
    <div  ref={container}  className='card h-fit w-full p-0 shadow-md shadow-primary rounded-md my-5 hide hidden -translate-x-[1000px]'>
        <div id='img'  className='projectImage p-0'>
              <Image src={props.projectImage} className='image rounded-md w-full h-full' alt='Image of different web developer projects'/>
           
          <div  id='hideCard' className={styles.hiddenCard}>
            <div id='hideHead' className={styles.hiddenHeading}>
              <h2 className='text-xl pt-2 lg:2xl:'>{props.projectHeading}</h2>
            </div>
            <div id='hideBtn' className={styles.hiddenBtn}>
              <Link href={`/work/${props.projectLink}`}  className='btn hover:bg-primary xl:text-xl ' >
                View Project
              </Link>
            </div>
            <div id='hideList' className={styles.hiddenList}>
              <ul className='pb-2 flex flex-row lg:text-2xl'>
                  {props.listItem}
              </ul>
            </div>
          </div>
        </div>
        {/* <div id='hidden' className={styles.hide}>
          <div className=''>
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
        </div> */}
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