import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
       <>
          <Head>
                <title>Tanishk | About Page</title>
                <meta name="description" content="any description" />
          </Head>

          <main className='w-full flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                      <Skills></Skills>
                      <Experience></Experience>
                      <Education></Education>
                </Layout>
          </main>
       </>
  )
}

export default about
