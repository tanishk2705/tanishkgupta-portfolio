import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import friendZonePic from '../../public/images/projects/FriendZone.png'
import portfolioPic from '../../public/images/projects/portfolio.png'
import encryptorPic from '../../public/images/projects/parallelEncryptor.jpg'
import proxyServerPic from '../../public/images/projects/ProxyServer.jpg'
import { GithubIcon } from '@/components/Icons'


const Project = ({title,type,img,link,github}) => {
         return ( 
         <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] '/>
                <Link href={link} target='_blank' className='w-full cursor-pointer rounded-lg overflow-hidden'>
                        <Image src={img} alt={title} className='w-[80%] h-[60%] '/>
                </Link>
                
                <div className='flex flex-col items-start justify-between mt-4'>
                        <span className='text-primary font-medium text-lg dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                        <Link href={link} target='_blank'
                        className='hover:underline underline-offset-2'>
                                <h2 className='my-2 w-full text-left text-3xl font-bold text-dark dark:text-light lg:text-2xl'>{title}</h2>
                        </Link>

                   <div className='w-full mt-2 flex items-center justify-between'>
                      <Link href={link} target='_blank' className='text-lg text-dark dark:text-light font-semibold underline md:text-base'>Visit</Link>
                      <Link href={github} target='_blank' 
                       className='w-8 md:w-6' >{" "}<GithubIcon/>{" "}</Link>
                      
                   </div>
                </div>
                       
                
          </article>
         )
}

const projects = () => {
  return (
    <>
        <Head>
                <title>Tanishk | Projects Page</title>
                <meta name="description" content="any description" />
        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-10'>
                     <AnimatedText 
                     className='mb-10 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                     text="Theory Will Only Take You So Far :- J.Robert Oppenheimer"/>

                     <div className='grid grid-cols-12 gap-12 my-7 gap-x-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0 '>
                        <div className='col-span-6 sm:col-span-12'>
                                <Project
                                title='FriendZone'
                                type='Web application for chatting'
                                img={friendZonePic}
                                link='https://anti-friend-zone-bytanishk.vercel.app/'
                                github='https://github.com/tanishk2705/AntiFriendZone' />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                                title='Portfolio Website'
                                type='React Portfolio Website'
                                img={portfolioPic}
                                link='https://tanishkgupta-portfolio.vercel.app/'
                                github='https://github.com/tanishk2705/tanishkgupta-portfolio/' />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project

                                title='Multithreaded Proxy Server'
                                type='Multithreaded Proxy server to implement caching'
                                img={proxyServerPic}
                                link='https://github.com/tanishk2705/multithreaded-proxy-server'
                                github='https://github.com/tanishk2705/multithreaded-proxy-server' />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                                title='Parallel File Encryptor'
                                type='Lightning Fast File encryptor and decryptor'
                                img={encryptorPic}
                                link='https://github.com/tanishk2705/Encrypter'
                                github='https://github.com/tanishk2705/Encrypter' />
                        </div>


                     </div>
                </Layout>
               
        </main>
    </>
  )
}

export default projects
