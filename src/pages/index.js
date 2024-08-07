import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-4-without-bg.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanishk Gupta | Home Page</title>
        <meta name="description" content="Tanishk Gupta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='flex items-center w-full min-h-screen  text-dark dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
              <div className='w-full flex items-center justify-between lg:flex-col'>
                  <div className='w-1/2 rounded-lg lg md:w-full'>
                    <Image src={profilePic} alt='Tanishk' className='w-[85%] h-[80%] rounded-lg lg:hidden md:inline-block md:w-full'
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'/>
                  </div>

                  <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                    <AnimatedText text='Tanishk Gupta' className='!text-7xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                    <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                       Explore my latest projects showcasing my enthusiasm in React.js, web development and core computer science fundamentals.
                       Feeling Techy enough? Check out the CLI version of my portfolio. 
                    </p>

                    <div className='flex items-center self-start mt-4 lg:self-center'>
                    <Link href='/forplacement.pdf' target={'_blank'}
                     className='flex items-center text-light bg-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                     download={true}>
                      Resume
                      <LinkArrow className='ml-3 w-6' ></LinkArrow>
                    </Link>
                    <Link href='mailto:tanishkji000@gmail.com' target={'_blank'}
                    className='ml-4 text-lg text-dark font-medium capitalize underline dark:text-light md:text-base'>
                      Contact
                    </Link>
                  </div>
                  </div>


              </div>
        </Layout>

              <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
                <Image src={lightBulb} alt='lightBulb' className='w-full h-auto'></Image>
              </div>
      </main>
    </>
  )
}
