import React from 'react'



const Headliner = ({bgopen}) => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const goToPrevious = ()=>{
    //     setCurrentIndex((prevIndex) => (prevIndex === 0? photographs.length -1 : prevIndex -1));
    // };

    // const goToNext = ()=>{
    //     setCurrentIndex((prevIndex) => (prevIndex === photographs.length -1? 0: prevIndex + 1) ); 
    // }
  return (
    <div className= { bgopen? ' w-full bg-black' : 'w-full bg-white'}>
    <div className= { bgopen?  'mx-auto bg-black max-w-screen-lg text-zinc-200 pt-2' :
'mx-auto bg-white max-w-screen-lg text-zinc-900 pt-2'
}>
        <h2 className="text-5xl font-bold ">
                headliners
            </h2>
            
            <p>
                Experience the sonic delight from these made-up artists across 7 days that music fans are calling
                "one of the many gigs that will happen this year"
            </p>
            
            {/* arrow left */}
            <div>
            </div>
            {/* carousel */}
            <div>
                    <div id=" default-carousel" className=" scroll-smooth flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto">
                        <div className="min-w-[80%] md:min-w-[40%]">


                            <img src='./images/band1.jpg' alt='band' className=' w-full h-full object-cover shadow-md shadow-black/20'/>
                       <div>
                            <h5 className="mt-2 text-2xl">Corduroy Gary</h5>
                            <h6 className="text-xl">1st January 9pm-Main Stage</h6>
                        </div>
                        </div>
                        {/* <!-- second image --> */}
                        <div className="min-w-[80%] md:min-w-[40%]">
                            <img src='./images/band2.jpg' alt='band' className=' w-full h-full object-cover shadow-md shadow-black/20'/>
                       <div>
                            <h5 className="mt-2 text-2xl">Steven Briggs</h5>
                            <h6 className="text-xl">1st January 9pm-Main Stage</h6>
                        </div>
                        </div>
                        
                        {/* <!-- third image --> */}
                        <div className="min-w-[80%] md:min-w-[40%]">
                            <img src='./images/band3.jpg' alt='band' className=' w-full h-full object-cover shadow-md shadow-black/20'/>
                       <div>
                            <h5 className="mt-2 text-2xl">Rigobert Jonas</h5>
                            <h6 className="text-xl">1st January 11pm-Main Stage</h6>
                        </div>
                        </div>
                        
                        {/* <!-- fourth image --> */}
                        <div className="min-w-[80%] md:min-w-[40%]">
                            <img src='./images/band4.jpg' alt='band' className=' w-full h-full object-cover shadow-md shadow-black/20'/>
                       <div>
                            <h5 className="mt-2 text-2xl">The Maestros</h5>
                            <h6 className="text-xl">1st January 9pm-Main Stage</h6>
                        </div>
                        </div>
                        
                        {/* <!-- fifth image --> */}
                        <div className="min-w-[80%] md:min-w-[40%]">
                            <img src='./images/band5.jpg' alt='band' className=' w-full h-full object-cover shadow-md shadow-black/20'/>
                       <div>
                            <h5 className="mt-2 text-2xl">The Mavericks</h5>
                            <h6 className="text-xl">1st January 9pm-Main Stage</h6>
                        </div>
                        </div>
                        
                        {/* <!-- sixth image --> */}
                        <div className="min-w-[80%] md:min-w-[40%]">
                            <img src='./images/band6.jpg' alt='band' className=' w-full h-full object-cover shadow-md shadow-black/20'/>
                       <div>
                            <h5 className="mt-2 text-2xl">Gabriella Banks</h5>
                            <h6 className="text-xl">1st January 9pm-Main Stage</h6>
                        </div>
                        </div>
                        
                        {/* <!-- seventh image --> */}
                        <div className="min-w-[80%] md:min-w-[40%]">
                            <img src='./images/band7.jpg' alt='band' className=' w-full h-full object-cover shadow-md shadow-black/20'/>
                       <div>
                            <h5 className="mt-2 text-2xl">Beverly Peters</h5>
                            <h6 className="text-xl">1st January 9pm-Main Stage</h6>
                        </div>
                        </div>
                        </div>
                        
                </div>
                {/* arrow right */}
                <div></div>
                {/* lineup and table */}
                <h2 className="mt-20 text-gray-200">Lineup</h2>
            <p className=' text-zinc-200'>Follow the timetable and stage to ensure you don't miss your favourite artists</p>

            {/* table */}
            <div className=" rounded-lg relative mt-5 bg-zinc-800 py-4 px-2 text-zinc-200">
<div className="absolute top-0 left-1/2 w-4 -ml-[8px] 
h-full rounded-full bg-gradient-to-b from-sky-900 via-cyan-800 to-teal-900">
<div className="sticky top-1/2">
    <div className="relative h-4 w-4">
        {/* animate ping */}
        <div className=" absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
        <div className="bg-rose-500 rounded-full relative h-4 w-4"></div>
    </div>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
    <h4 className="p-2 bg-zinc-900 rounded-lg my-4">
        1st January
    </h4>
</div>
<div></div>
<div className="text-right">
    <div className="font-bold">James Bradley</div>
    <div className="text-zinc-400"> 6pm- Sage Stage</div>
</div>
<div></div>
<div></div>
<div><div className="font-bold">James Bradley</div>
<div className="text-zinc-400"> 6pm- Sage Stage</div>
</div>
<div>
    <h4 className="p-2 bg-zinc-900 rounded-lg my-4">
        1st January
    </h4>
</div>
<div></div>
<div className="text-right">
    <div className="font-bold">Abimbola Davidson</div>
    <div className="text-zinc-400"> 6pm- Sage Stage</div>
</div>
<div></div>
<div></div>
<div><div className="font-bold">Vic Davidson</div>
<div className="text-zinc-400"> 6pm- Sage Stage</div>
</div>
 </div>
</div>
{/* Tickets */}
<h2 class="mt-20">Tickets</h2>
            <table class="mt-5 table w-full border border-zinc-500 border-collapse">
                <thead class="text-lg font-bold">
                    <td class=" border border-zinc-500">Tickets</td>
                <td class="border border-zinc-500">Price</td>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-zinc-500 py-2 px-3">
                        Single day ticket
                    </td>
                    <td class="border border-zinc-500 py-2 px-3">
                        $30
                    </td>
                </tr>
                <tr>
                    <td class="border border-zinc-500 py-2 px-3">
                        7 day ticket
                    </td>
                    <td class="border border-zinc-500 py-2 px-3">
                        $100
                    </td>
                </tr>
            </tbody>
            <caption class="caption-bottom">Once they're gone, they're gone! <br></br>
                Don't sleep on this!

            </caption>
            </table>
                </div>
                

    </div>
  )
}

export default Headliner