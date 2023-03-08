import axios from "axios"
import SearchInput from "@/components/searchInput"
import NavBar from "@/components/navbar"
import { prisma } from "@/server/database/client"
import { useState } from "react"

export default function posts({posts}){
    const[title, setTItle] = useState("")
    const[content, setContent] = useState("")
    const[authorName, setAuthorName] = useState("")
    const handleSubmit = async() => {
        const { data } = await axios.post(  '/api/posts', {
            title: title,
            content: content,
            authorName: authorName,
        })
        console.log(data)
    }

    const showPosts = () => {
        console.log(posts)
    }

    return(
        <>
            <NavBar/>
            <SearchInput/>
            <div className="flex flex-col items-center">
                <input onChange={(event) => setAuthorName(event.target.value)} className=' p-1 w-80 bg-blue-100' placeholder="username"></input>
                <textarea onChange={(event) => setTItle(event.target.value)} className=' p-1 h-8 w-80 resize-none bg-orange-200' placeholder="Title"></textarea>
                <textarea onChange={(event) => setContent(event.target.value)} className=' p-1 h-56 w-80 resize-none bg-blue-100' placeholder="Text"></textarea>
                <button onClick={() => handleSubmit()} className=" bg-red-300 py-2 px-4 m-4 rounded-md "> post </button>
            </div>
s
            <button onClick={() => handleSubmit()}> send it </button>
            <button onClick={() => showPosts()}>show</button>
            {
                posts.map((post) => 
                    <div key={post.id}>
                        {post.title}
                        {post.content}
                    </div>
                )
            }
        </>
    )
}

export async function getServerSideProps() {
    // will always run on the server
    const posts = await prisma.note.findMany()

    return {
    props: {
        posts: JSON.parse(JSON.stringify(posts)),
    },
    } 
}
