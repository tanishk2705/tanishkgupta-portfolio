import React, { useRef } from 'react'
import { useScroll,motion } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position,company,companyLink,time,address,work}) => {
      const ref = useRef(null)
          return(
                <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
                  <LiIcon reference={ref}/>
                       <motion.div
                       initial={{y:50}}
                       whileInView={{y:0}}
                       transition={{duration:0.5,type:"spring"}}
                       >
                           <h3 className='capitalize font-bold text-dark dark:text-light text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}  target="_blank" className='text-primary capitalize'>@{company}</a></h3>
                           <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                                {time} | {address}
                           </span>
                           <p className='text-dark dark:text-light font-medium w-full md:text-sm'>{work}</p>
                       </motion.div>
                </li>
                
          )
}

const Experience = () => {
        const ref = useRef(null)
        const {scrollYProgress} = useScroll({
                target:ref,
                offset:["start end","centre start"]
        })
  return (
      <>
             <div className='my-32'>
             <h2 className='font-bold text-8xl w-full text-center text-dark dark:text-light md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
                   <div ref={ref} className='w-[75%] mx-auto mt-7 relative lg:w-[90%] md:w-full'>
                        <motion.div /* style={{scaleY:scrollYProgress}} */ className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px] '></motion.div>
                          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                                <Details
                                position="Tech Team Member"
                                company="Finance and Consulting Club"
                                companyLink="https://fcc-nitrr.vercel.app/"
                                time="2023-Present"
                                address="National Intitute of Tecnology, Raipur"
                                work="Worked on a team of five member responsible for creating dynamic sophisticated website tailored for Finance and Consulting Club, NIT Raipur.
                                and a comprehensive platform to provide resources to the users, networking opportunities with intuitive navi-
                                gation and easy access to information about the club."
                                />
                          </ul>
                   </div>
             </div>
      </>
  )
}

export default Experience
