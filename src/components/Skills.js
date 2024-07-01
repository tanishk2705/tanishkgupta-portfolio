import React from 'react'

const skillarr = ["Web","HTML","CSS","Javascript","Typescripts","C/C++","Tailwind CSS","NextJS","ReactJS","NodeJS","Framer Motion","MongoDB","Github","Data Structures"]

const Kala = ({skill}) => {
      return <div className='rounded p-2.5 px-5 font-semibold text-center cursor-pointer bg-black dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light shadow-dark border-2 border-solid border-transparent hover:border-dark dark:hover:border-light'>{skill}</div>
}

const Skills = () => {
  return (
        <>
              <h2 className='font-bold text-8xl text-dark dark:text-light w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Skills</h2>
              <div className='flex gap-4 flex-wrap mt-7'>
               

                        <Kala skill="Web"/>
                        <Kala skill="HTML"/>
                        <Kala skill="CSS"/>
                        <Kala skill="Tailwind"/>
                        <Kala skill="Javascript"/>
                        <Kala skill="Typescript"/>
                        <Kala skill="C/C++"/>
                        <Kala skill="NextJS"/>
                        <Kala skill="ReactJS"/>
                        <Kala skill="NodeJS"/>
                        <Kala skill="Framer Motion"/>
                        <Kala skill="MongoDB"/>
                        <Kala skill="Github"/>
                        <Kala skill="Data Structures"/>
                       
              </div>

              {/* <div className='flex gap-4 flex-wrap mt-3'>
                        skillarr.map((skill) =>
                             return <div className='rounded p-2.5 px-5 font-semibold text-center cursor-pointer bg-black text-white hover:bg-light hover:text-dark shadow-dark border-2 border-solid border-transparent hover:border-dark'>{skill}</div>
                        )
              </div> */}
        </>
    
  )
}

export default Skills
