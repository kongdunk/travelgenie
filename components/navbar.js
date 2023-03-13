

export default function NavBar(){
    return(
        <nav className='flex justify-around items-center mt-4 border-b-2 border-l-slate-900'>
            <div className="text-lg font-bold"> trending </div>
            <div className=" text-lg font-bold "> explore </div>
            <a href="/" className='w-1/4'>
            <img className='w-full' src="travelgenieLogo.svg" alt="travel genie Logo"/>
            </a>
            <div className="text-lg font-bold"> my journey </div>
            <div className="text-lg font-bold"> map </div>
        </nav>
    )
}