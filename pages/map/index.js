import NavBar from '@/components/navbar';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ReactDOM = require('react-dom');
const WorldMap = require('react-world-map');

export default function Account(){
    const [selected, onSelect] = useState(null);
    const router = useRouter()

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
    <NavBar/>
    <div className='w-full flex justify-center mt-3'>
        <WorldMap selected={ selected } onSelect={ onSelect }/>
    </div>
    <div className='w-full flex justify-center font-semibold'> selected region: {continents[selected]}</div>
    <div className='w-full flex justify-center'>
        <button onClick={() => router.push("map/" + lowerCasedContinents[selected])} className= 'bg-slate-500 m-2 p-2 rounded-xl text-white font-bold'>
            select region
        </button>
    </div>
    </>

    )
}