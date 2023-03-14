import NavBar from '@/components/navbar';
import { useState } from 'react';
const ReactDOM = require('react-dom');
const WorldMap = require('react-world-map');

export default function Account(){
    const [selected, onSelect] = useState(null);

    const continents = {
        na: "North America",
        sa: "South America",
        af: "Africa",
        eu: "Europe",
        as: "Asia",
        oc: "Oceania",
    }
    
    return (
    <>
    <NavBar/>
    <div className='w-full flex justify-center mt-3'>
        <WorldMap selected={ selected } onSelect={ onSelect }/>
    </div>
    <div className='w-full flex justify-center font-semibold'> selected region: {continents[selected]}</div>
    </>

    )
}