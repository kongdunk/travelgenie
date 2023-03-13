import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios';
import NavBar from '@/components/navbar';
import Card from '@/components/cards';
import { prisma } from '@/server/database/client';
import { SessionProvider } from "next-auth/react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({posts}) {

  const { data:session } = useSession()
  // session?.user
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <NavBar/>
          <div className='flex flex-col justify-center align-middle m-auto w-3/4 lg:w-2/5 object-contain transform duration-300'>
            <div className='flex flex-col justify-center items-center w-full'>
              <div className='flex flex-col w-full justify-center items-center border-x-2 '>
              {
                posts.map((post) => 
                  <div>
                    <Card id={post.id} key={post.id} likes={post.likes} user={post.user.image} title={post.title} content={post.content} />
                  </div>
                
                )
              }
              </div>
            </div>
          </div>
        </header>
        <div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
    // will always run on the server
    const posts = await prisma.note.findMany({
      include: {
        user: true,
      }
    })

    return {
    props: {
        posts: JSON.parse(JSON.stringify(posts)),
    },
    } 
}