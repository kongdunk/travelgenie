import axios from "axios"
import { useState } from "react"

export default function Card({user, title, content, likes, id}){

    //to check if heart icon is clicked or not 
    const [heart, setHeart] = useState(false)
    //to display likes being incremented or decremented
    const [likesNow, setLikesNow] = useState(likes)

    const handleLike = async(id) => {
        setLikesNow(heart ? likesNow - 1 : likesNow + 1)
        const { data } = await axios.post(  '/api/likes', {
            id,
            like: heart ? true : false
        })
        console.log(data)
    }

    return (
    <>
        <div className='w-5/6 flex justify-center flex-col rounded-lg p-5 m-8'>
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-semibold mb-3'>
                    {title}
                </h2>
                <p className="mb-3 font-bold">
                    {user}
                </p>
            </div>
            <p className="mb-3">
                {content}
            </p>
            
            <div className="border-t-2 pt-2 ">
                <svg onClick={() => {
                    setHeart(!heart)
                    handleLike(id)
                }} 
                    onDurationChange xmlns="http://www.w3.org/2000/svg" width="25" fill={heart? "#fb3958": "none"} viewBox="0 0 24 24"><path stroke="#323232" strokeLinejoin="round" strokeWidth="2" d="m4.882 12.956 5.62 6.351a2 2 0 0 0 2.996 0l5.62-6.351c1.673-1.891 2.542-4.269 1.285-6.536-1.452-2.62-4.113-3.156-6.426-1.396a13.084 13.084 0 0 0-1.766 1.654.284.284 0 0 1-.422 0 13.084 13.084 0 0 0-1.766-1.654C7.71 3.264 5.049 3.8 3.597 6.42c-1.257 2.267-.388 4.645 1.285 6.536Z"/></svg>
            </div>
            <div className="font-bold pt-3">
                {likesNow} likes
            </div>
            </div>
        <div className=" border-b-2 w-full "/>
    </>
    )
}