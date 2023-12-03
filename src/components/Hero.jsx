import React, {useState} from 'react'


const Hero = ({setBgopen}) => {
       const[dark, setDark] = useState(false)
       
       const modeSwitch = ()=>{
        setDark(!dark)
       }

       const handleToggleClick = ()=>{
        setBgopen();
        modeSwitch();
       }
    
    
  return (
    // main div
    <div  className=' w-full relative  flex justify-center items-center'>
        {/* image div */}
        <div className=' flex  min-w-full h-[600px]'>
            <img src='../images/concert.jpg' alt='hero' className=' w-full h-full  object-cover min-h-[400px] '/>
        </div>
        <div onClick={handleToggleClick}  className=' w-8 h-6 absolute top-0 right-0 z-10'>
            
             <img  src='../images/darktoggle.png' alt='toggle'/> 

            <div className={ dark?' w-4 h-4 rounded-full bg-black top-2 absolute right-0 ':
            'w-4 h-4 rounded-full bg-white top-2 absolute right-4'
        }></div> 
            
        </div>
        {/* hero content */}
        <div className="flex-col md: items-center absolute justify-center ">
                            <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md flex-col justify-center ">
                                <div className="relative ml-8 pl-12">
                                <img src="./images/logo.png" alt='logo' width="175"/>
                                <div className="flex items-center justify-center mt-[-70px] ml-[-60px] mb-5">
                                    <div className=" ml-[-15px] flex h-14 w-14 rounded-full bg-pink-500 items-center justify-center gap-1">
                                        <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey "></div>
                                        <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-200 "></div>
                                        <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-200 "></div>
                                        <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-300 "></div>
                                        <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-[75ms] "></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-5xl font-bold">
                                tw:<span className="text-sky-900">mf</span>
                            </div>
                            </div>
                            
                            <div className="font-bold mt-3 text-sm">
                                Keep me updated with news and promotions
                            </div>

                            <form className="mt-3 flex gap-2">
                                <input type="email" placeholder="email" className="rounded-sm border border-white/40 bg-white/30
                                backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500
                                focus:outline"/>
                                <button className=' border-hidden' type="submit">
                                <div className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors
                                hover:bg-sky-900 shadow-lg hover:shadow-black/20 ">
                                    Subscribe
                                </div>
                            </button>
                            </form>

                            </div>

    </div>

    
  )
}

export default Hero