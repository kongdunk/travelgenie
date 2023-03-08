export default function Card({user, title, content}){
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
        <p>
            {content}
        </p>
    </div>
    <div className=" border-b-2 w-full "/>
    </>
    )
}