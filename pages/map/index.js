import NavBar from '@/components/navbar';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Account(){
    const [selected, onSelect] = useState(null);
    const router = useRouter()

    //<WorldMap selected={ selected } onSelect={ onSelect }/> "REACT WORLD MAP"

    //for displaying selected continent
    const continents = {
        na: "North America",
        sa: "South America",
        af: "Africa",
        eu: "Europe",
        as: "Asia",
        oc: "Oceania",
    }

    //for routing to selected continent page
    const lowerCasedContinents = {
        na: "northamerica",
        sa: "southamerica",
        af: "africa",
        eu: "europe",
        as: "asia",
        oc: "oceania",
    }
    
    return (
    <>
    <script src="https://cdn.jsdelivr.net/gh/heatherbooker/react-world-map@master/dist/index.js"></script>
    <NavBar/>
    <div className='mx-10 mt-5'>
    <div className='w-full h-screen flex-col justify-center items-center duration-200'>
        <div className='flex w-full h-1/3 justify-center items-center '>
            <div onClick={() => router.push("map/" + lowerCasedContinents['na'])} className='w-1/3 h-full flex justify-start items-end p-7 font-bold shadow-2xl hover:bg-red-600 hover:scale-95 hover:text-white duration-300 rounded-3xl m-1'>North America</div>
            <div onClick={() => router.push("map/" + lowerCasedContinents['eu'])} className='w-1/3 h-full flex justify-start items-end p-7 font-bold shadow-2xl hover:bg-zinc-700 hover:scale-95 hover:text-white duration-300 rounded-3xl m-1'>Europe</div>
            <div onClick={() => router.push("map/" + lowerCasedContinents['as'])} className='w-1/3 h-full flex justify-start items-end p-7 font-bold shadow-2xl hover:bg-green-600 hover:scale-95 hover:text-white duration-300 rounded-3xl m-1'>Asia</div>
        </div>
        <div className='flex w-full h-1/3'>
            <div onClick={() => router.push("map/" + lowerCasedContinents['sa'])} className='w-1/3 h-full flex justify-start items-end p-7 font-bold shadow-2xl hover:bg-red-800  hover:scale-95 hover:text-white duration-300 rounded-3xl m-1'>South America</div>
            <div onClick={() => router.push("map/" + lowerCasedContinents['af'])} className='w-1/3 h-full flex justify-start items-end p-7 font-bold shadow-2xl hover:bg-amber-400 hover:scale-95 duration-300 rounded-3xl m-1'>Africa</div>
            <div onClick={() => router.push("map/" + lowerCasedContinents['oc'])} className='w-1/3 h-full flex justify-start items-end p-7 font-bold shadow-2xl hover:bg-slate-600 hover:scale-95 hover:text-white duration-300 rounded-3xl m-1'>Oceania</div>
        </div>
        {/* 
        <div className='w-full flex justify-center font-semibold'> selected region: {continents[selected]}</div>
        <div className='w-full flex justify-center'>
            <button onClick={() => router.push("map/" + lowerCasedContinents[selected])} className= 'bg-slate-500 m-2 p-2 rounded-xl text-white font-bold'>
                select region
            </button>
        </div>
        */}
    </div>
    </div>
    </>

    )
}