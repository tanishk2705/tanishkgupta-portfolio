import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {CodeChefIcon, ForcesIcon, GithubIcon, InstaIcon, InstagramIcon, LeetcodeIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {motion} from "framer-motion"

const CustomLink = ({href,title,className}) => {
    const router = useRouter();
    // console.log(router)
       return(
         <Link href={href} className={`${className} text-dark dark:text-light relative group`}>
                {title}
                <span
                  className={`h-[1px] inline-block w-0  bg-dark 
                  absolute left-0 -bottom-0.5 
                  group-hover:w-full transition-[width] ease duration-300
                  ${router.asPath===href ? "w-full" : "w-0"}
                  dark:bg-light`}
                  
                >&nbsp;
                </span>
         </Link>
       )
}

const CustomMobileLink = ({href,title,className="",toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
      router.push(href)
  }
  // console.log(router)
     return(
       <button href={href} className={`${className} text-light dark:text-dark my-2 relative group`} onClick={handleClick}>
              {title}
              <span
                className={`h-[1px] inline-block w-0  bg-light 
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath===href ? "w-full" : "w-0"}
                dark:bg-dark`}
                
              >&nbsp;
              </span>
       </button>
     )
}

const NavBar = ()=>{
   const [mode,setMode] = useThemeSwitcher();
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () =>{
       setIsOpen(!isOpen);
   }
        return(
             <header
               className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg;px-16 md:px-12 sm:px-8"
             >

                <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                  <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                  <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                  <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
                </button>

              <div className="flex w-full justify-between items-center lg:hidden">
                <nav>
                <CustomLink href='/' title="Home" className="mr-4"/>
                <CustomLink href='/about' title="About" className="mx-4"/>
                <CustomLink href='/projects' title="Projects" className="mx-4 "/>
                <CustomLink href='/cliVersion' title="CLI version" className="ml-4 "/>
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                <a href="https://x.com/tanishk2772" target={'_blank'} className="w-6 mr-2">
                  <TwitterIcon/>
                  </a>
                <a href="https://github.com/tanishk2705" target={'_blank'} className="w-6 mx-2">
                  <GithubIcon/>
                  </a>
                <a href="https://www.linkedin.com/in/tanishk-gupta-48b865228/" target={'_blank'} className="w-6 mx-2">
                  <LinkedInIcon/>
                  </a>
                  <a href="https://leetcode.com/u/tanishkgpt/"target={'_blank'} className="w-6 mx-2 dark:bg-light rounded-md">
                  <LeetcodeIcon/>
                  </a>
                  <a href="https://www.codechef.com/users/second_nature"target={'_blank'} className="w-6 mx-2 dark:bg-light rounded-md">
                  <CodeChefIcon/>
                  </a>
                  <a href="https://codeforces.com/profile/tanishk_gpt"target={'_blank'} className="w-6 mx-2">
                  <ForcesIcon/>
                  </a>
                  <a href="https://www.instagram.com/tanishkg27/"target={'_blank'} className="w-6 mx-2">
                  <InstagramIcon/>
                  </a>

                  <button
                  onClick={()=> setMode(mode==="light" ? "dark" : "light")}
                  className={`ml-2 flex items-center justify-center rounded-full p-1
                    ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"} `}  >
                    {mode==="dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>}
                  </button>
                </nav>
              </div>


              {
                isOpen ?
                     
                <motion.div 
                initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
                animate={{scale:1,opacity:1}}
                 className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                <nav className="flex items-center flex-col justify-center">
                <CustomMobileLink href='/' title="Home" className="" toggle={handleClick}/>
                <CustomMobileLink href='/about' title="About" className="" toggle={handleClick}/>
                <CustomMobileLink href='/projects' title="Projects" className="" toggle={handleClick}/>
                <CustomMobileLink href='/cliVersion' title="CLI version" className="" toggle={handleClick}/>
                </nav>

                <nav className="flex items-center justify-center flex-wrap mt-2">
                <a href="https://x.com/tanishk2772" target={'_blank'} className="w-6 mr-2 sm:mx-1">
                  <TwitterIcon/>
                  </a>
                <a href="https://github.com/tanishk2705" target={'_blank'} className="w-6 mx-2 sm:mx-1 bg-dark dark:bg-dark rounded-full">
                  <GithubIcon/>
                  </a>
                <a href="https://www.linkedin.com/in/tanishk-gupta-48b865228/" target={'_blank'} className="w-6 mx-2 sm:mx-1">
                  <LinkedInIcon/>
                  </a>
                  <a href="https://leetcode.com/u/tanishkgpt/"target={'_blank'} className="w-6 mx-2 bg-light rounded-md sm:mx-1">
                  <LeetcodeIcon/>
                  </a>
                  <a href="https://www.codechef.com/users/second_nature"target={'_blank'} className="w-6 mx-2 bg-light rounded-md sm:mx-1">
                  <CodeChefIcon/>
                  </a>
                  <a href="https://codeforces.com/profile/tanishk_gpt"target={'_blank'} className="w-6 mx-2 sm:mx-1">
                  <ForcesIcon/>
                  </a>
                  <a href="https://www.instagram.com/tanishkg27/"target={'_blank'} className="w-6 mx-2 sm:mx-1">
                  <InstagramIcon/>
                  </a>

                  <button
                  onClick={()=> setMode(mode==="light" ? "dark" : "light")}
                  className={`ml-2 flex items-center justify-center rounded-full p-1
                    ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"} `}  >
                    {mode==="dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>}
                  </button>
                </nav>
                 </motion.div>

                : null
              }
              
                 
             </header>
        )
}

export default NavBar
