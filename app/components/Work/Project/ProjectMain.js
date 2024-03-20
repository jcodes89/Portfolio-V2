import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectMain = (props) => {
  return (
    <main className=' h-fit w-full absolute bg-accent px-2 lg:px-4 xl:px-6 lg:mt-4 text-white'>
    <div className='grid grid-cols-1 lg:grid-cols-2'>
    <section className='projectHeroImage h-full flex justify-center items-center mx-4'>
        <div>
          <Image className='mx-0 mt-4 shadow-md h-full' src={props.projectImage}/>
        </div>
      </section>
      <section className='projectHero m-4'>
        <div className='border-b-2 py-2 pb-0 border-white text-4xl'>
          <h2 className='font-bold'>{props.projectHeading}</h2>
          <div className='py-4 text-lg lg:text-xl'>
            <Link className='underline hover:text-primary' target='_blank' href={props.href}>Click here to view website</Link>
        </div>
        </div> 
        <div className='projectTable pt-2'>
          <table className='w-full text-base'>
            <tbody className=''>
              <tr className=''>
                <td className='techHeader py-3 text-xl font-bold'>
                  Category
                </td>
                <td className='flex justify-start pt-4 pr-0'>
                  {props.projectCategory}
                </td>
              </tr>

              <tr className=''>
                <td className='techHeader py-3 text-xl font-bold'>
                  Technologies
                </td>
                <td className='flex justify-start'>
                  <ul className='py-2'>
                      {props.projectTechList}
                  </ul>
                </td>
              </tr>

              <tr className=''>
                <td className='techHeader py-3 text-xl font-bold'>
                  Year Created
                </td>
                <td className='flex justify-start pt-4 pr-0'>
                    {props.projectYear}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='projectDescription text-white mt-3'>
            {props.projectDescription}
        </div>
      </section>
        </div>
      <section className='projectDisplay m-4 xl:grid xl:grid-cols-2 xl:gap-4'>
            {props.projectImages}
      </section>
    </main>
  )
}

export default ProjectMain