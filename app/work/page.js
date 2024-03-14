'use client'
import React, {useRef} from 'react'
import WorkHeroCard from '../components/Work/WorkHeroCard'
import davinch from '@/public/Images/davinchsite.jpg'
import relief from '@/public/Images/relief.jpg'
import gsap from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Davinch from '../components/Work/DavinchStack'
import ReliefStack from '../components/Work/ReliefStack'


const page = ({html, css, javascript}) => {
  const container = useRef()


  
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline()

  useGSAP(() => {
    gsap.to('.hide', {
      display: 'block',
      ease: 'ease',
      x: 0,
      duration: 1,
      stagger: 1
    }
    )

  }, {scope: container})


  return (
    <main ref={container} className=' h-full w-full absolute p-4'>
      <WorkHeroCard
        projectLink='davinch'
        projectImage={davinch}  
        projectHeading='Davinch Leather Co.'
        listItem={Davinch.map((item) => {
          return(
            <li key={item.id}>{item.tech}</li>
          )
        })}
      />
      <WorkHeroCard
        projectLink='relief-app'
        projectImage={relief}
        projectHeading='Disaster Relief App'
        listItem={ReliefStack.map((item) => {
          return(
            <li key={item.id}>{item.tech}</li>
          )
        })}
      />
    </main>
  )
}

export default page