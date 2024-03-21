'use client'
import React, {useRef} from 'react'
import Link from 'next/link'
import WorkHeroCard from '../components/Work/WorkHeroCard'
import davinch from '@/public/Images/davinchsite.jpg'
import relief from '@/public/Images/relief.jpg'
import portfolio from '@/public/Images/portfolio.jpg'
import gsap from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

import DavinchStack from '../components/Work/DavinchStack'
import ReliefStack from '../components/Work/ReliefStack'
import PortfolioStack from '../components/Work/PortfolioStack'
import Footer from '../components/Footer'


const page = () => {
  const container = useRef()


  
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline()

  useGSAP(() => {
    gsap.to('.hide', {
      display: 'block',
      ease: 'expo',
      x: 0,
      duration: 1,
      stagger: 1
    }
    )

  }, {scope: container})


  return (
    <>
    
    <main ref={container} className='w-full h-screen  lg:h-full grid grid-cols-1 place-items-center  center py-12 p-4 xl:grid-cols-2 xl:gap-4'>
      <span className='z-20 h-fit pt-5'>
        <p className='parClick text-white lg:hidden'>Please click any project to learn more!</p>
        <p className='parHover hidden text-white lg:flex'>Please hover over any project to learn more!</p>
      </span>
      <WorkHeroCard
        projectLink='my-portfolio'
        githubLink='Portfolio-V2'
        projectImage={portfolio}
        projectHeading='JeremyDev Portfolio'
        listItem={PortfolioStack.map((item) => {
          return(
            <li key={item.id} className='p-[.2rem] text-sm lg:text-lg hover:text-primary cursor-default'>{item.tech}</li>
          )
        })}
      />
      <WorkHeroCard
        projectLink='davinch'
        githubLink='Davinch-Leather-App-V2'
        projectImage={davinch}  
        projectHeading='Davinch Leather Co.'
        listItem={DavinchStack.map((item) => {
          return(
            <li key={item.id} className='p-[.2rem] text-sm lg:text-lg hover:text-primary  cursor-default'>{item.tech}</li>
          )
        })}
      />
      <WorkHeroCard
        projectLink='relief-app'
        githubLink='New-Relief-App'
        projectImage={relief}
        projectHeading='Disaster Relief App'
        listItem={ReliefStack.map((item) => {
          return(
            <li key={item.id} className=' p-[.2rem] text-sm lg:text-lg hover:text-primary cursor-default'>{item.tech}</li>
          )
        })}
      />
    </main>
    
    </>
  )
}

export default page