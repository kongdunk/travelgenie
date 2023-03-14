import axios from "axios"
import SearchInput from "@/components/searchInput"
import NavBar from "@/components/navbar"
//import { prisma } from "@/server/database/client"
import { useState } from "react"

export default function posts({posts}){
    const[title, setTitle] = useState("")
    const[content, setContent] = useState("")
    const[authorName, setAuthorName] = useState("")
    const handleSubmit = async() => {
        const { data } = await axios.post(  '/api/posts', {
            title: title,
            content: content,
            authorName: authorName,
            likes: 0
        })
        console.log(data)
    }

    const showPosts = () => {
        console.log(posts)
    }

    return(
        <>
            <NavBar/>
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center w-1/2  rounded-2xl bg-white border-2">

                    <textarea onChange={(event) => setTitle(event.target.value)} className=' p-1 h-8 w-5/6 resize-none text-center scrollbar-hide' placeholder="Title"></textarea>
                    <div className="border-b-2 w-full"></div>
                    <textarea onChange={(event) => setContent(event.target.value)} className=' p-1 h-56 w-5/6 resize-none border-b-2' placeholder="What's your travel story"></textarea>
                    {/* tag input */}
                    <input onChange={(event) => setAuthorName(event.target.value)} className=' p-1 w-5/6 border-b-2' placeholder="Add Country Tag"></input>
                    <div className=" p-1 w-full flex justify-end">
                        <button onClick={() => handleSubmit()} className=" bg-red-300 py-2 px-4 m-4 rounded-md "> post </button>
                    </div>
                </div>
            </div>
            {/*
                posts.map((post) => 
                    <div key={post.id}>
                        {post.title}
                        {post.content}
                    </div>
                )
    */}
        </>
    )
}
/*
export async function getServerSideProps() {
    // will always run on the server
    const posts = await prisma.note.findMany()

    return {
    props: {
        posts: JSON.parse(JSON.stringify(posts)),
    },
    } 
}
*/
