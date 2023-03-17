import Image from "next/image"
import { useState } from "react"
import { Router, useRouter } from 'next/router';
import { getServerSession } from 'next-auth';
import { useSession, signIn, signOut } from "next-auth/react"

export default function NavBar({image}){
    const [profile, showProfile] = useState(false)    
    const router = useRouter()
    const { data:session } = useSession()

    return(
        <nav className='flex justify-around items-center mt-4 border-b-2 border-l-slate-900 shadow'>
            <button onClick={() => router.push("/")} className=" text-sm sm:text-lg font-bold"> explore </button>
            <button onClick={() => router.push("/map")} className="  text-sm sm:text-lg font-bold " href="/map"> map </button>
            <button onClick={() => router.push("/")} className='w-1/4'>
                <img className='w-full' src="/travelgenieLogo.svg" alt="travel genie Logo"/>
            </button>
            <button onClick={() => router.push("/createpost")} className=" text-sm sm:text-lg font-bold"> create post </button>
            <button>
                <img onClick={() => {showProfile(!profile)}} className=" text-sm sm:text-lg font-bold w-8" src={session? session.user.image: "/favicon.ico"}/>
                {
                profile && <div className=" absolute p-1 right-10 w-36 shadow-md bg-white">
                    <div className="flex flex-col p-3 justify-center items-center">
                        {!session &&
                            <a role="button" onClick={() => router.push("/profile")}> Sign In </a>
                        }
                        <a role="button" onClick={() => signOut()}> Sign Out </a>
                    </div>
                </div>
                }
            </button>
        </nav>
    )
}

export async function getServerSideProps(context) {
    // will always run on the server
    const session = await getServerSession(context.req, context.res, authOptions)

    return {
        props: {
            session
        },
    } 
}