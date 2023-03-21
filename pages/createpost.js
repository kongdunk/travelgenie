import axios from "axios"
import SearchInput from "@/components/searchInput"
import NavBar from "@/components/navbar"
//import { prisma } from "@/server/database/client"
import { useState } from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { useRouter } from "next/router"

export default function Posts({posts}){
    const router = useRouter()
    const[title, setTitle] = useState("")
    const[content, setContent] = useState("")
    const[continent, setContinent] = useState("")
    const[inputError, setInputError] = useState(false)
    const handleSubmit = async() => {
        const { data } = await axios.post(  '/api/posts', {
            title: title,
            content: content,
            continent: continent.toUpperCase(),
            likes: 0
        })
        console.log(data)
        router.push("/")

    }

    const showPosts = () => {
        console.log(posts)
    }

    return(
        <>
            <NavBar/>
            <div className="flex flex-col items-center w-full mt-10">
                <div className="flex flex-col items-center w-3/4 sm:w-1/2  rounded-2xl bg-white border-2 shadow-2xl">
                    <textarea onChange={(event) => setTitle(event.target.value)} className=' p-1 h-8 w-5/6 resize-none text-center scrollbar-hide m-1' placeholder="Title"></textarea>
                    <div className="border-b-2 w-full"></div>
                    <textarea onChange={(event) => setContent(event.target.value)} className=' p-1 h-56 w-5/6 resize-none border-b-2 m-1' placeholder="What's your travel story?"></textarea>
                    {/* tag input */}
                    <div className="w-5/6">
                        <input onChange={(event) => setContinent(event.target.value)} className=' p-1 w-full border-b-2' placeholder="Add Continent Tag"></input>
                        {
                            inputError && <div className="absolute text-red-400"> please enter a valid continent </div>
                        }
                    </div>
                    <div className=" p-1 w-full flex justify-end">
                        <button onClick={() => {
                            if(continent.toLowerCase()==="north america" || continent==="south america" || continent==="africa" || continent==="europe" || continent==="asia" || continent==="oceania"){
                                setInputError(false)
                                handleSubmit()
                            } else {
                                setInputError(true)
                            }
                            }} className=" bg-red-300 py-2 px-4 m-4 rounded-md "> post </button>
                    </div>
                </div>
            </div>  
        </>
    )
}
export async function getServerSideProps(context) {
    // will always run on the server
  const session = await getServerSession(context.req, context.res, authOptions)

  if(!session) {
    //redirect to login page
    return {
        redirect: {
          destination:"/api/auth/signin",
          permanent: false,
        },
    }
  }
    return {
    props: {
        session
    },
    } 
}
