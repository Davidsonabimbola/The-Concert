import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [ticket, setTicket] = useState(false)

  const toggleMenu = ()=>{
    setOpen(!open)
}

const openTicket = ()=>{
  setTicket(!ticket)
}
  return (
    
    <div className=' flex bg-gradient-to-r from-rose-600 to-pink-600 top-0 w-full h-auto items-center relative'>
      {/* navbar items */}
      <div className=' flex gap-1 items-center text-zinc-300 pt-3 pb-3'>
        <div className=' w-11 h-11 items-center flex '>
        <img className=' w-full h-full' src='../images/logo-inverted.png' alt='logo'/>
        </div>
        <div class="font-bold text-2xl">
                    tw:<span class="text-sky-900">mf</span>
                </div>
                <div className=' w-8 h-8 bg-slate-300 rounded-full animate-bounce ml-1'>
                <img className=' w-full h-full' src='../images/mucicTime.png' alt='logo'/>
                </div>
        </div>

         
        <div onClick={toggleMenu} className=' flex flex-col items-center gap-1 cursor-pointer text-zinc-300 pt-3 pb-3 pr-2  absolute right-0 md:hidden '>
           <div className=' bg-white w-6 h-1 rounded-md'></div>
            <div className=' bg-white w-6 h-1 rounded-md'></div>
            <div className=' bg-white w-6 h-1 rounded-md'></div>
            </div>

            {/* the mobile drawer */}

           { open && <div className= " block top-[62px] absolute bg-gradient-to-r from-rose-500 to-pink-500 w-full left-0 z-10">
                    <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transition-colors hover:bg-white/10"><span>Home</span></div>
                        <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transition-colors hover:bg-white/10"><span>Lineup</span></div>
                        <div id="tickets-menu-item"  className=" relative  h-full cursor-pointer items-center text-pink-200 hover:text-zinc-200 transition-colors hover:bg-white/10">
                            <div onClick={openTicket} className="p-4 text-center font-bold ">Tickets</div>
                         {ticket &&   <div className="block">
                                <div className=" text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                                    <span>Single day ticket</span>
                                </div>
                                <div  className=" text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                                    <span>7 day ticket</span>
                                </div>
                            </div>
                            } 
                        </div>
                        <div class="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transition-colors hover:bg-white/10"><span>Support</span></div>
                        
                        </div>
                        } 

                        {/* the full screen nav section  */}

             <div className=" flex-1 hidden  md:flex items-center justify-end">
                    <div class="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200
                    hover:text-zinc-200 transition-colors ease-in-out hover:bg-white/10">
                    <span>Home</span></div> 
                    
                    <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200
                    hover:text-zinc-200 transition-colors ease-in-out hover:bg-white/10">
                    <span>Lineup</span></div> 

                    <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200
                    hover:text-zinc-200 transition-colors ease-in-out hover:bg-white/10 group">
                    <span>Tickets</span>
                    {/* sub folders for Tickets */}
                    <div className="bg-pink-500 group-hover:block hidden absolute top-full right-0 whitespace-nowrap rounded-b-md text-right z-10">
                                <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200"><span>Single day ticket</span></div>
                                <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200"><span>7 day ticket</span></div>
                            </div>
                    </div> 

                    <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200
                    hover:text-zinc-200 transition-colors ease-in-out hover:bg-white/10">
                    <span>Support</span></div> 
                    </div>
        
    </div>
    
  )
}

export default Navbar